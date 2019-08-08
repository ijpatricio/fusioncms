<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\API;

use Tests\Foundation\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FileTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_guest_can_not_upload_files()
    {
        $this->json('POST', 'api/files')->assertStatus(401);
    }

    /** @test */
    public function a_guest_can_not_delete_files()
    {
        $this->actingAs($this->admin, 'api');

        Storage::fake('public');

        $file = $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo.jpg')
        ])->getData()->data;

        $this->actingAs($this->guest, 'api');

        $this->json('DELETE', 'api/files/1')->assertStatus(403);
    }

    /** @test */
    public function a_valid_file_must_be_provided()
    {
        $this->actingAs($this->admin, 'api');

        $this->json('POST', 'api/files', [
            'file' => 'not-a-file',
        ])->assertStatus(422);
    }

    /** @test */
    public function a_user_with_permissions_can_upload_files()
    {
        $this->actingAs($this->admin, 'api');

        Storage::fake('public');

        $response = $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo.jpg')
        ]);
        
        $file = $response->getData()->data;

        Storage::disk('public')->assertExists($file->location);
        
        $response->assertStatus(201);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_files()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        Storage::fake('public');

        $file = $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo.jpg')
        ])->getData()->data;
        
        $response = $this->json('DELETE', '/api/files/'.$file->id)
            ->assertStatus(200);
        
        $this->assertDatabaseMissing('files', [
            'id' => $file->id
        ]);

        Storage::disk('public')->assertMissing($file->location);
    }
}
