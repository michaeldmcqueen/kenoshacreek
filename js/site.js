// A $( document ).ready() block.
var el = document.querySelector('.site-navigation--toggle');
var body = document.body;

el.onclick = function() {
  el.classList.toggle('active');
  body.classList.toggle("navigation-open");
}

$( document ).ready(function() {
  $('.multi-choice #other').click(function() {
    $('.other-text-box').toggleClass('show-box');
  });
});