
/* Autosave cells in spreadsheet */
jQuery(document).ready(function(){
	for( let j = 1; j < 11; j++ ) { // rows
		for( let i = 0; i < 10; i++ ) { // columns
			let cellColumn = String.fromCharCode(65 + i); // 65 is the ASCII code for upper case 'A'
			let cellRow = j;
			jQuery('#'+cellColumn+cellRow).keyup(function(e){
				e.preventDefault();
				$.ajaxSetup({
					headers: {
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					}
				});
				jQuery.ajax({
					url: window.location.href+'/postCell',
					method: 'post',
					data: {
						column: cellColumn,
						row: cellRow,
						value: jQuery('#'+cellColumn+cellRow).val()
					},
					success: function(result){ // Display updated cell values
						jQuery('#content').val(jQuery('#'+cellColumn+cellRow).val());
						jQuery('#'+cellColumn+cellRow).attr('data-cell-content', jQuery('#content').val());
						jQuery('#'+cellColumn+cellRow).attr('value', jQuery('#content').val());
				}});
			});
		}
	}
});

/* Display cell content on click */
jQuery(document).ready(function(){
	for( let j = 1; j < 11; j++ ) { // rows
		for( let i = 0; i < 10; i++ ) { // columns
			let cellColumn = String.fromCharCode(65 + i); // 65 is the ASCII code for upper case 'A'
			let cellRow = j;
			jQuery('#'+cellColumn+cellRow).click(function(){
				jQuery('#content').val(jQuery('#'+cellColumn+cellRow).attr('data-cell-content'));
				jQuery('#'+cellColumn+cellRow).val(jQuery('#'+cellColumn+cellRow).attr('data-cell-content'));
			});
		}
	}
});

/* Calculate cell values on page load */
jQuery(document).ready(cellOperations);

/* Calculate cell values on click */
jQuery(document).ready(function() {
	jQuery(document).click(cellOperations);
});

/* Cell operations */
function cellOperations(e) {
	for( let j = 1; j < 11; j++ ) { // rows
		for( let i = 0; i < 10; i++ ) { // columns
			let cellColumn = String.fromCharCode(65 + i); // 65 is the ASCII code for upper case 'A'
			let cellRow = j;
			// Display computed sum for every cell except for selected cell
			if (!$(e.target).closest('#'+cellColumn+cellRow).length) {
				let value = String(jQuery('#'+cellColumn+cellRow).attr('data-cell-content'));
				if (value.charAt(0) === '=') { // Formula detected
					value = value.substr(1); // Strip off "=" sign
					let cells = value.split('+'); // Split string by "+"
					let sum = 0;
					sum = calculateSum(cells);
					jQuery('#'+cellColumn+cellRow).val(sum);
				}
			}
		}
	}
}

/** 
 * Calculate sum
 *
 * @param  array
 * @return int
 */
function calculateSum(cells) {
	let sum = 0;
	for (let x = 0; x < cells.length; x++) {
		if (cells[x].charAt(0).match(/[a-z]/i)) { // Cell id detected (first char is a letter)
			sum += parseInt(jQuery('#'+cells[x]).val());
		} else { // Integer
			sum += parseInt(cells[x]);
		}
	}
	return sum;
}
