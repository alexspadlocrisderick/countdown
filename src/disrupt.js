// set the date we're counting down to
var target_date = new Date(2018, 02, 16, 11, 30, 00).getTime();
// variables for time units
var days, hours, minutes, seconds;
// update the tag with id "countdown" every 1 second
setInterval(function () {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
    var days1 = (""+days).split("");
    var hours1 = (""+hours).split("");
    var minutes1 = (""+minutes).split("");
    var seconds1 = (""+seconds).split("");
    
    // add time in the page
    if (jQuery(days1).length == 2) {
      if (days1[0].indexOf('-') > -1){
        jQuery("#days1").text('0');
        jQuery("#days2").text('0');
      } else {
        jQuery("#days1").text(days1[0]);
        jQuery("#days2").text(days1[1]);
      }
    } else if (jQuery(days1).length == 3) {
      jQuery("#days1").text('0');
      jQuery("#days2").text('0');
    } else {
      jQuery("#days1").text('0');
      jQuery("#days2").text(days1[0]);
    }
    if (jQuery(hours1).length == 2) {
      if (hours1[0].indexOf('-') > -1){
        jQuery("#hours1").text('0');
        jQuery("#hours2").text('0');
      } else {
        jQuery("#hours1").text(hours1[0]);
        jQuery("#hours2").text(hours1[1]);
      }
    } else if (jQuery(hours1).length == 3) {
      jQuery("#hours1").text('0');
      jQuery("#hours2").text('0');
    } else {
      jQuery("#hours1").text('0');
      jQuery("#hours2").text(hours1[0]);
    }
    if (jQuery(minutes1).length == 2) {
      if (minutes1[0].indexOf('-') > -1){
        jQuery("#minutes1").text('0');
        jQuery("#minutes2").text('0');
      } else {
        jQuery("#minutes1").text(minutes1[0]);
        jQuery("#minutes2").text(minutes1[1]);
      }
    } else if (jQuery(minutes1).length == 3) {
      jQuery("#minutes1").text('0');
      jQuery("#minutes2").text('0');
    } else {
      jQuery("#minutes1").text('0');
      jQuery("#minutes2").text(minutes1[0]);
    }
    if (jQuery(seconds1).length == 2) {
      if (seconds1[0].indexOf('-') > -1){
        jQuery("#seconds1").text('0');
        jQuery("#seconds2").text('0');
      } else {
        jQuery("#seconds1").text(seconds1[0]);
        jQuery("#seconds2").text(seconds1[1]);
      }
    } else if (jQuery(seconds1).length == 3) {
      jQuery("#seconds1").text('0');
      jQuery("#seconds2").text('0');
    } else {
      jQuery("#seconds1").text('0');
      jQuery("#seconds2").text(seconds1[0]);
    }
    jQuery(".separate").text(':');
}, 1000);