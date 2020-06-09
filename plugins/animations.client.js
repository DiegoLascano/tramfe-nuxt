import $ from './jquery.min.js';

// This block changes the bg color of the BODY on scrolling
$(window).scroll(function () {
  // selectors
  var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });
}).scroll();

// This block changes the bg color of the MODAL on scrolling
$(document).ready(function () {
  $('#modal').scroll(function () {
    var $modal = $('#modal'),
      $panel = $('.modal-section');

    var scroll = $modal.scrollTop() + ($modal.height() / 2);

    $panel.each(function () {
      var $this = $(this);

      // $modal.scrollTop() added in order to avoid that section position changes with scrolling
      if ($this.position().top + $modal.scrollTop() <= scroll && $this.position().top + $modal.scrollTop() + $this.height() > scroll) {

        // remove all the existing classes of the modal
        $modal.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });

        // adds current section class to set the new background color of the modal
        $modal.addClass('color-' + $(this).data('color'));
      }
    })
  }).scroll();
});

// This function changes the bg color of the navbar on scrolling
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    // var scrolltop = $(this).scrollTop();
    $nav.toggleClass('scrolled', $(this).scrollTop() > 5 * ($nav.height()));
    // console.log(scrolltop);
  });
});

// scroll text
// $(document).on('scroll', function() {
// $("#title").css("top", Math.max(180 - 0.2*window.scrollY, 0) + "px");
// $("#static").css("opacity", Math.max(1 - 0.004*window.scrollY, 0));
// })


// app backup
// require('./bootstrap');

// window.Vue = require('vue');
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// const app = new Vue({
//     el: '#app',
// });
