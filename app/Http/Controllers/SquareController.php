<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SquareController extends Controller
{
    public function redSquare() {
        return Inertia::render('RedSquare', [
            'color' => 'skyblue',
        ]);
    }
    public function redSquareBlade() {
        return view('RedSquare', [
            'color' => 'crimson',
            'size' => '78',
        ]);
    }
}
