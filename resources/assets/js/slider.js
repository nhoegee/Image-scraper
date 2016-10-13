var slider = ( function (document) {

  'use strict';

  document.addEventListener( 'DOMContentLoaded', function () {
    var _sliderContainer = document.querySelector( '.slider-container' );
    var _slider = _sliderContainer.querySelector( '.slider' );
    var _slides = _slider.querySelectorAll( '.slide' );
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
        return next[ 0 ];
      }
    }

    var _slide = function ( e ) {
      e.preventDefault();

      var element = [].slice.call( _slider.querySelectorAll( '.slide.is-next' ));
      console.log(element);
      // TODO: Fix remove is not defined.
      element.classList.remove( '.is-next' );
      console.log(element);
      var newSlide = _next( element );
      console.log(newSlide);
    };

    _previousSlide.addEventListener( 'click', _slide, false );

    _nextSlide.addEventListener( 'click', _slide, false );
  });

}(document));
