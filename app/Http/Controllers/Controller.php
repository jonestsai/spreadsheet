<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use DB;
use Illuminate\Http\Request;
use App\Cell;

class Controller extends BaseController
{
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

	public function home()
	{
		$cells = DB::table('cells')->pluck('content', 'id')->all();
		return view('spreadsheet', ['cells' => $cells]);
	}

	public function postCell(Request $request)
	{
		$cell = Cell::firstOrNew(array('id' => $request->column . $request->row));
		$cell->id = $request->column . $request->row;
		$cell->content = $request->value;
		$cell->save();

		return response()->json(['success'=>'Data is successfully added']);
	}
}
