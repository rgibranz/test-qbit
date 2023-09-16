#!/bin/bash

# Menjalankan studi-kasus-1.php
php studi-kasus-1.php

# Menjalankan studi-kasus-2.php
php studi-kasus-2.php

# Menjalankan composer install di folder backend-umkm
cd backend-umkm
composer install
cd ..

# Mengcopy file .env.example menjadi .env
cp backend-umkm/.env.example backend-umkm/.env

# Menjalankan npm install di folder frontend-umkm
cd frontend-umkm
npm install
cd ..
