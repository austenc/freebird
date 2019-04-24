const mix = require('laravel-mix')
require('laravel-mix-purgecss')

mix
  .js('resources/js/freebird.js', 'js')
  .less('resources/less/freebird.less', 'css')
  .options({
    postCss: [require('tailwindcss')()],
    processCssUrls: false,
  })
  .purgeCss()
  .browserSync({
    proxy: 'freebird.test',
    files: ['./**/*', '../../content/**/*'],
  })
