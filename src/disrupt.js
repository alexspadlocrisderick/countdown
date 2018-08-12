$(document).ready(function() {
  //jQuery time
  var current_fs, next_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function(){
    if(animating) return false;
    animating = true;
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50)+"%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale('+scale+')',
          'position': 'absolute'
        });
        next_fs.css({'left': left, 'opacity': opacity});
      }, 
      duration: 800, 
      complete: function(){
        current_fs.hide();
        animating = false;
      }, 
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });
});


feijao();

function feijao(){
  setTimeout(function (){
    b = $('.next');
    b[0].click();
    setTimeout(function (){
      b[1].click();
      setTimeout(function (){
        b[2].click();
        setTimeout(function (){
          b[3].click();
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}


var startStamp = new Date(2018, 07, 09, 23, 00, 00).getTime();
var newDate = new Date();
var newStamp = newDate.getTime();

function updateClock() {

    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp - startStamp) / 1000);

    var d = Math.floor(diff / (24 * 60 * 60));
    /* though I hope she won't be working for consecutive days :) */
    diff = diff - (d * 24 * 60 * 60);
    var h = Math.floor(diff / (60 * 60));
    diff = diff - (h * 60 * 60);
    var m = Math.floor(diff / (60));
    diff = diff - (m * 60);
    var s = diff;

    $('.time-elapsed').html('<h4>Stupid Agency delay in: <span class="red">' + d + ' days and ' + h + ':' + m + ':' + s + '</span></h4>');
}

setInterval(updateClock, 1000);

// set the date we're counting down to
var target_date = new Date(2018, 07, 09, 23, 00, 00).getTime();
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