let mix = require('laravel-mix');


mix.options({ processCssUrls: false });

mix.stylus('./stylus/app.styl','dist');
mix.js('./js/main.js','dist');
