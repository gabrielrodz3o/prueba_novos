<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['name', 'dni', 'address', 'phone', 'email', 'salary','company_id'];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
