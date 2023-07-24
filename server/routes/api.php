<?php


use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;

Route::get('/companies', [CompanyController::class, 'index']);
Route::post('/companies', [CompanyController::class, 'store']);
// Define las rutas para actualizar y borrar compañías si es necesario.

Route::get('/employees', [EmployeeController::class, 'index']);
Route::post('/employees', [EmployeeController::class, 'store']);