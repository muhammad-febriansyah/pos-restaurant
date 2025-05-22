<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $auth = Auth::user();
        return Inertia::render('dashboard/home/index', [
            'auth' => $auth,
        ]);
    }
}
