var el = document.querySelector('.site-navigation--toggle');
var body = document.body;

el.onclick = function() {
  el.classList.toggle('active');
  body.classList.toggle("navigation-open");

}

// var date_01 = document.getElementsByClassName('date-label-01');
// var date_02 = document.getElementsByClassName('date-label-02');
// var date_03 = document.getElementsByClassName('date-label-03');
// var date_04 = document.getElementsByClassName('date-label-04');
// var date_05 = document.getElementsByClassName('date-label-05');
// var date_06 = document.getElementsByClassName('date-label-06');
// var date_12 = document.getElementsByClassName('date-label-12');

// var requiredElement1 = date_01[0];
// var requiredElement2 = date_02[0];
// var requiredElement3 = date_03[0];
// var requiredElement4 = date_04[0];
// var requiredElement5 = date_05[0];
// var requiredElement6 = date_06[0];
// var requiredElement12 = date_12[0];

// requiredElement1.classList.add("one-pm");
// requiredElement2.classList.add("two-pm");
// requiredElement3.classList.add("three-pm");
// requiredElement4.classList.add("four-pm");
// requiredElement5.classList.add("five-pm");
// requiredElement6.classList.add("six-pm");
// requiredElement12.classList.add("twelve-pm");