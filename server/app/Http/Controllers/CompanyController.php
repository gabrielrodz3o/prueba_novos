<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::all();
        return response()->json($companies);
    }
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);


        $company = Company::create($data);

        return response()->json($company, 201);
    }
    public function showEmployeesByCompany($companyId)
    {
        $company = Company::findOrFail($companyId);
        $employees = $company->employees;

        return response()->json($employees);
    }
}
