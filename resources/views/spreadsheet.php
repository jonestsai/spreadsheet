<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<meta name="csrf-token" content="<?php echo csrf_token(); ?>">
</head>
<body>
	<div class="container">
		<div class="row">
			<input type="text" id="content" class="form-control m-3" value="" disabled>
		</div>
		<div class="row">
			<form action="#" method="post">
				<table class="table">
					<thead>
						<tr>
							<th></th>
							<?php for($i = 'A'; $i < 'K'; $i++) { ?>
								<th class="text-center"><?php echo $i; ?></th>
							<?php } ?>
						</tr>
					</thead>
					<tbody>
						<?php for($j = 1; $j < 11; $j++) { ?>
						<tr>
							<td class="text-center"><?php echo $j; ?></td>
							<?php for( $i = 'A'; $i < 'K'; $i++) { ?>
								<td class="p-1"><input type="text" id="<?php echo $i.$j; ?>" class="form-control pl-2 pr-2" value="<?php echo isset($cells[$i.$j]) ? $cells[$i.$j] : ''; ?>" data-cell-content="<?php echo isset($cells[$i.$j]) ? $cells[$i.$j] : ''; ?>"></td>
							<?php } ?>
						</tr>
						<?php } ?>
					</tbody>
				</table>
			</form>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="/js/spreadsheet.js"></script>
</body>
</html>