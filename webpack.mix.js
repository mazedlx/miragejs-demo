const mix = require('laravel-mix');
const path = require('path');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix.webpackConfig({
resolve: {
  alias: {
    '@components': path.resolve(__dirname, 'resources/js/src'),
  }
}
});

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css')
   .tailwind('./tailwind.config.js');

if (mix.inProduction()) {
  mix
   .version()
   .purgeCss();
}
