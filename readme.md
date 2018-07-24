* The top input text field only displays the cell value and cannot be used to 
  modify the cell.
* On initial page load, cells that contain formulas will be changed to
  numerical values. The formulas in the cells may appear for a split second.
  This was done on purpose to simplify the code and make it easier to read.
  This can be easily solved by computing the numerical value with a server
  side scripting language.
* Subtraction works as long as the formula is separated by "+". For example,
  =-2+A1+B1+-3
* Notable files:
  - /app/HTTP/Controllers/Controller.php (Controller: displays spreadsheet
    and saves spreadsheet cell values)
  - /resources/views/spreadsheet.php (View: displays spreadsheet)
  - /public/js/spreadsheet.js (Makes spreadsheet interactive)
  - /routes/web.php (Construct URLs, nothing much here)
  - /app/Cell.php (Model: database table declaration, nothing much here)
* Database structure:
  - Table name: cells
  - Columns: 
    - Name: id          Type: varchar(255)  Null: No   PRIMARY KEY
    - Name: content     Type: varchar(255)  Null: Yes
    - Name: created_at  Type: timestamp     Null: Yes
    - Name: updated_at  Type: timestamp     Null: Yes


# Building an Interactive Spreadsheet

Today, the vast majority of businesses implement their commission plan models
in Microsoft Excel, Google Sheets, or some other spreadsheet software. In this
problem, you will implement a simplified browser-based spreadsheet that can be
used to implement an extremely simple financial model.

# Requirements

* For simplicity, the size of the spreadsheet is fixed to 10 rows and 10
  columns.
    - Columns are named after capital letters, starting with "A".
    - Rows are numbered and increasing, starting from "1".
* The state of the spreadsheet should be maintained in a backend service that
  is mutatable via API calls.
* The frontend should be interactive: saving data after a cell in the
  spreadsheet changes, and updating any affected cells with their newly
  computed values.
* The state of the spreadsheet should be persisted across server restarts.
* Cell values should support either an integer or a simple formula that
  references other cells and only needs to support addition.
    - For example, `-1` and `123` should be able to be stored in a cell.
    - `=A1+B1` should be able to be stored in a cell, and the display value
      should be the result of evaluating the sum of the value in `A1` and
      the value in `B1`.

# Out-of-scope

* Don't worry about handling multiple concurrent users viewing and editing the
  spreadsheet at the same time.


