var slider = ( function (document) {

  'use strict';

  document.addEventListener( 'DOMContentLoaded', function () {
    var _sliderContainer = document.querySelector( '.slider-container' );
    var _slider = _sliderContainer.querySelector( '.slider' );
    var _slides = _slider.querySelectorAll('.slide');
    var _previousSlide = _sliderContainer.querySelector( 'button[name=previous_slide]' );
    var _nextSlide = _sliderContainer.querySelector( 'button[name=next_slide]' );

    var _queryAll = function ( container, element ) {
      return Array.prototype.slice.call( container.querySelectorAll( element ));
    };

    var _addClass = function ( elements, c ) {
      elements.forEach(function(element) {
        element.classList.add( c );
      });
    }

    var _removeClass = function ( elements, c ) {
      elements.forEach( function ( element ) {
        element.classList.remove( c );
      });
    };

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

    // TODO: Fix _setStyle.
    var _setStyle = function ( elements, property, value ) {
      elements.forEach(function(element) {
        element.style.property = value;
      });
    }

    var _slide = function ( e ) {
      e.preventDefault();

      var slides = _queryAll( _slider, '.slide.is-previous' );
      _removeClass(slides, 'is-previous');

      var newSlide = _next( slides );
      _addClass(newSlide, 'is-previous');

      var i = j;
      var j;
      var length = _slides.length;
      var results = [];
      for (i = j = 2; 2 <= length ? j <= length : j >= length; i = 2 <= length ? j++ : j--) {
        newSlide = _next(newSlide);
        _setStyle( newSlide, order, i);
        results.push(newSlide);
      }
      return results;
    };

    _previousSlide.addEventListener( 'click', _slide, false );

    _nextSlide.addEventListener( 'click', _slide, false );
  });

}(document));
