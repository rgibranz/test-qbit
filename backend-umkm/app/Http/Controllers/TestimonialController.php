<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index()
    {
        // Mengambil semua testimoni
        $testimonials = Testimonial::all();
        return response()->json($testimonials, 200);
    }

    public function create(Request $request)
    {
        // Membuat testimoni baru
        $testimonial = Testimonial::create([
            'name' => $request->name,
            'testimony' => $request->testimony,
            'rating' => $request->rating
        ]);

        return response()->json($testimonial, 201);
    }
}
