<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cell extends Model
{
    /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'cells';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'column', 
		'row', 
		'content' 
	];
}
