// custom dependencies
import AOS from 'aos';
import svgInjector from 'svg-injector-2';
import slick from 'slick-carousel';

import '../retina';


import '../../../node_modules/@fortawesome/fontawesome-pro/js/fontawesome';
import '../../../node_modules/@fortawesome/fontawesome-pro/js/brands';
import '../../../node_modules/@fortawesome/fontawesome-pro/js/solid';
import '../../../node_modules/@fortawesome/fontawesome-pro/js/light';

const deps = {
  AOS: AOS,
  svgInjector: svgInjector,
  slickCarousel: slick
};

module.exports = deps;