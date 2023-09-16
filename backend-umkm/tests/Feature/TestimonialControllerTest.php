<?php

namespace Tests\Feature;

use App\Models\Testimonial;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TestimonialControllerTest extends TestCase
{
    public function testGetAllTestimonials()
    {
        // Buat dummy testimoni
        Testimonial::factory(5)->create();

        // Panggil endpoint untuk mengambil testimoni
        $response = $this->get('/api/testimonials');

        $response->assertStatus(200)
            ->assertJsonStructure([
                '*' => ['id', 'name', 'testimony', 'rating', 'created_at', 'updated_at']
            ]);
    }

    public function testCreateTestimonial()
    {
        $data = [
            'name' => 'Fulan',
            'testimony' => 'Testimoni ini adalah contoh.',
            'rating' => 5
        ];

        // Panggil endpoint untuk membuat testimoni baru
        $response = $this->post('/api/testimonials', $data);

        $response->assertStatus(201)
            ->assertJsonStructure(['id', 'name', 'testimony', 'rating', 'created_at', 'updated_at']);
    }
}
