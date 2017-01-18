/*
var $ = require('jquery')
var request = require('superagent')
//var controller = require('./controller')
var dateHelpers = require('./dateHelpers')
var moment = require('moment');
var momentCountdown = require('moment-countdown')
var momentZone = require('moment-timezone')
var search = require('../views/main.hbs')

var timeZone = ""
var todaysDate = dateHelpers.currentDate()
var todaysTime = dateHelpers.currentTime()
var gtmTime = dateHelpers.timeGtm()
var gtmDate = dateHelpers.dateGtm()
var time = ""
var ectTime = ""
var epoch = ""
var gtmTimeEpoch = ""
var momentUct = ""
var momentEct = ""
var momentUctLong = ""
var momentEctLong = ""
var mctDateShort = ""
var mctTimeShort = ""
var ectTimeShort = ""
var ectDateShort = ""


function listen(){

    $('#time-submit').click(function(e){
    e.preventDefault()
          gtmTimeEpoch = new Date(gtmTime).valueOf()
          time = $('#mct-input').val()
          epoch = new Date(time).valueOf()
          mctTimeShort = moment.utc(epoch).format("HH:mm")
          mctDateShort = moment.utc(epoch).format("D MMM")
          $('#mct-time').html(mctTimeShort)
          request
              .post('/')
              .send({search: mctTimeShort})
              .end(function(err, response){
                console.log("this is query", response)
          countdownTimerMct()
        });
      })


      $('#time-submit-ect').click(function(e){
      e.preventDefault()
            gtmTimeEpoch = new Date(gtmTime).valueOf()
            ectTime = $('#ect-input').val()
            epoch = new Date(ectTime).valueOf()
            ectTimeShort = moment.utc(epoch).format("HH:mm")
            console.log("this is ectTimeShort", ectTimeShort)
            ectDateShort = moment.utc(epoch).format("D MMM")
            $('#ect-time').html(ectTimeShort)
            request
                .post('/')
                .send(ectDateShort)
                .end(function(err, response){
                 console.log("this is query", response)

            countdownTimerEct()
          });
        });

}



var intervalMct = setInterval(countdownTimerMct, 1000)
var intervalEct = setInterval(countdownTimerEct, 1000)

function countdownTimerMct(){
    intervalHours =moment.duration(epoch - moment().tz('Europe/London')).hours()
    intervalMinutes = moment.duration(epoch - moment().tz('Europe/London')).minutes()
    intervalSeconds = moment.duration(epoch - moment().tz('Europe/London')).seconds()
    $('#hours').text(intervalHours)
    $('#minutes').text(intervalMinutes)
    $('#seconds').text(intervalSeconds)

  alertNotifiction()
  return setInterval
}

function countdownTimerEct(){
    intervalHours =moment.duration(epoch - moment().tz('Europe/London')).hours()
    intervalMinutes = moment.duration(epoch - moment().tz('Europe/London')).minutes()
    intervalSeconds = moment.duration(epoch - moment().tz('Europe/London')).seconds()
    $('#hours').text(intervalHours)
    $('#minutes').text(intervalMinutes)
    $('#seconds').text(intervalSeconds)

  alertNotifiction()
  return setInterval
}


function alertNotifiction(){
  if (intervalHours == 0 && intervalMinutes == 30 && intervalSeconds < 59 && intervalSeconds > 50) {
     thirtyMinutes()
     $("#time-input").hide()
    document.body.appendChild(soundThirty).play()
  } else if (intervalHours == 0 && intervalMinutes == 30 && intervalSeconds == 44){
      $( "audio" ).remove( "#audio" )
      $("#time-input").show()
  } else if(intervalHours == 0 && intervalMinutes == 15 && intervalSeconds < 59 && intervalSeconds > 45) {
     fifteenMinutes()
     $("#time-input").hide()
      document.body.appendChild(soundFifteen).play()
  } else if (intervalHours == 0 && intervalMinutes == 15 && intervalSeconds == 44) {
      $( "audio" ).remove( "#audio" )
      $("#time-input").show()
  } else if (intervalHours == 0 && intervalMinutes == 5  && intervalSeconds < 59 && intervalSeconds > 45) {
      $("#time-input").hide()
     fiveMinutes()
     document.body.appendChild(soundFive).play()
  } else if (intervalHours == 0 && intervalMinutes == 5 && intervalSeconds == 44 ) {
      $( "audio" ).remove( "#audio" )
      $("#time-input").show()
  } else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds < 59 && intervalSeconds > 45) {
      zeroMinutes()
      $("#time-input").hide()
      document.body.appendChild(soundEnd).play()
      timeType()
  }  else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds == 44) {
      $("audio" ).remove( "#audio" )
      $("#time-input").show()
  } else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds == 0 && timeZone == "MCT" ) {
         countdownTimerEct()
  } else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds == 0 && timeZone == "ECT") {
        countdownTimerMct()
  }

}



$('div.section:empty').hide();

  function thirtyMinutes(){
    document.getElementById("timer-message").innerHTML = "30 minutes ....";
    $('#timer-message').fadeOut(500).fadeIn(500)
    setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 );
  }

  function fifteenMinutes()  {
    document.getElementById("timer-message").innerHTML = "15 minutes ....";
    $('#timer-message').fadeOut(500).fadeIn(500);
    setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 );
  }

  function fiveMinutes()  {
     document.getElementById("timer-message").innerHTML = "5 minutes ....";
     $('#timer-message').fadeOut(500).fadeIn(500);
     setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 );
  }

  function zeroMinutes(){
    document.getElementById("timer-message").innerHTML = "times up ....";
     $('#timer-message').fadeOut(500).fadeIn(500).addClass("timer-message");
     setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 )
   }

   function timeType(){

       var todaysDateGtm = $("#todays-date-gtm").text()
       var todaysTimeGtm = $("#todays-time-gtm").text()


       if(todaysDateGtm == mctDateShort && todaysTimeGtm < mctTimeShort ){
         timeZone = "MCT"
       } else if (todaysDateGtm == ectDateShort && todaysTimeGtm < ectTimeShort && mctTimeShort < ectTimeShort){
         timeZone = "ECT"
       }
   }

module.exports = {
  listen:listen,
  momentUctLong:momentUctLong,
  gtmTime:gtmTime,
}
*/
