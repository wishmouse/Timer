
var $ = require('jquery')
//var controller = require('./controller')
var dateHelpers = require('./dateHelpers')
var moment = require('moment');
var momentCountdown = require('moment-countdown')
var momentZone = require('moment-timezone')

var todaysDate = dateHelpers.today()
var todaysTime = dateHelpers.currentTime()
var gtmTime = dateHelpers.timeGtm()
console.log("this is gtmTime", gtmTime)
var time = ""
var epoch = ""
var gtmTimeEpoch = ""
var momentUct = ""
var momentUctLong = ""
var difference = ""

function listen(){

  var gtmTimeShort = moment(gtmTime).tz('Europe/London').format("HH:mm")
  var gtmDateShort = moment(gtmTime).tz('Europe/London').format("D MMM")

    $("#todays-date").append(todaysDate)
    $("#todays-time").append(todaysTime)
    $("#todays-time-gtm").append(gtmTimeShort)
    $("#todays-date-gtm").append(gtmDateShort)

    $('#time-submit').click(function(e){
    e.preventDefault()
          gtmTimeEpoch = new Date(gtmTime).valueOf()
          time = $('#mct-input').val()
          epoch = new Date(time).valueOf()
          momentUct = moment.utc(epoch).format("HH:mm:ss")
          momentUctLong = moment.utc(epoch).format()
          $('#mct-time').html(momentUct)
          difference = moment(moment(momentUctLong,"DD-MM-YYYY HH:mm:ss").diff(moment(gtmTime,"DD-MM-YYYY HH:mm:ss"))).format("HH:mm:ss")
          console.log("this is difference", difference)

          countdownTimer()
        });
}

var intervalID = setInterval(countdownTimer, 1000)

function countdownTimer(){
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
    document.body.appendChild(soundThirty).play()
  } else if (intervalHours == 0 && intervalMinutes == 30 && intervalSeconds == 44){
      $( "audio" ).remove( "#audio" )
  } else if(intervalHours == 0 && intervalMinutes == 15 && intervalSeconds < 59 && intervalSeconds > 45) {
     fifteenMinutes()
      document.body.appendChild(soundFifteen).play()
  } else if (intervalHours == 0 && intervalMinutes == 15 && intervalSeconds == 44) {
      $( "audio" ).remove( "#audio" )
  } else if (intervalHours == 0 && intervalMinutes == 5  && intervalSeconds < 59 && intervalSeconds > 45) {
     fiveMinutes()
     document.body.appendChild(soundFive).play()
  } else if (intervalHours == 0 && intervalMinutes == 5 && intervalSeconds == 44 ) {
      $( "audio" ).remove( "#audio" )
  } else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds < 59 && intervalSeconds > 45) {
    zeroMinutes()
    document.body.appendChild(soundEnd).play()
  }  else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds == 44) {
      $( "audio" ).remove( "#audio" )
  } else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds < 10 && intervalSeconds > 1) {
  console.log("do nothing")
  }
}


$('div.section:empty').hide();

  function thirtyMinutes(){
    document.getElementById("timer-message").innerHTML = "30 minutes ....";
    $('#timer-message').fadeOut(500).fadeIn(500);
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
     $('#timer-message').fadeOut(500).fadeIn(500);
     setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 )
   }



module.exports = {
  listen:listen,
  momentUctLong:momentUctLong,
  gtmTime:gtmTime,
}
