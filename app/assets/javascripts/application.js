// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery-ui
//= require pulse
//= require_tree .



$(document).ready(function(){

  var properties = {
     fontSize: "15px",
     paddingTop: '0px',
     paddingBottom: '0px'
  };

  var el1 = $('#coming-soon #first');
  var el2 = $('#coming-soon #second');
  var el3 = $('#coming-soon #third');

  el1.delay(50).pulse(properties, {duration : 1500, pulses: 5000});
  el2.delay(1000).pulse(properties, {duration : 1500, pulses: 5000});
  el3.delay(1500).pulse(properties, {duration : 1500, pulses: 5000});


})