var slider = ( function (document) {

  'use strict';

  document.addEventListener( 'DOMContentLoaded', function () {
    var _sliderContainer = document.querySelector( '.slider-container' );
    var _slider = _sliderContainer.querySelector( '.slider' );
    var _slides = _slider.querySelectorAll('.slide');
    var _previousSlide = _sliderContainer.querySelector( 'button[name=previous_slide]' );
    var _nextSlide = _sliderContainer.querySelector( 'button[name=next_slide]' );

    var _next = function ( elements ) {
      var next = [];

      elements.forEach( function ( element ) {
        if ( element.nextElementSibling ) {
          next.push( element.nextElementSibling );
        }
      });

      if ( next.length > 0 ) {
        return next;
      } else {
        return [_slides[ 0 ]];
      }
    };

    var _slide = function ( e ) {
      e.preventDefault();

      var slides = Array.prototype.slice.call( _slider.querySelectorAll( '.slide.is-reference' ));
      slides.forEach( function ( element ) {
        element.classList.remove( 'is-reference' );
      });

      var newSlides = _next( slides );
      newSlides.forEach(function( element ) {
        element.classList.add( 'is-reference' );
        element.style.order = 1;
      });

      var length = _slides.length;
      var results = [];

      for (var i = 2; i <= length; i++) {
        newSlides = _next( newSlides );
        newSlides.forEach( function( element ) {
          element.style.order = i;
        });
        results.push( newSlides );
      }
      return results;
    };

    _previousSlide.addEventListener( 'click', _slide, false );

    _nextSlide.addEventListener( 'click', _slide, false );
  });

}(document));
