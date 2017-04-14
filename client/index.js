var $ = require('jquery')
var request = require('superagent')
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


$('document').ready(function() {


function listen(){
    $('#enter-data').hide()
    $("#error").hide()


      $('#data-submit').click(function(e){
      e.preventDefault()
            gtmTimeEpoch = new Date(gtmTime).valueOf()
            ectTime = $('#ect-input').val()
            mctTime = $('#mct-input').val()
            epoch = new Date(ectTime).valueOf()
            mctEpoch = new Date(mctTime).valueOf()
            ectTimeShort = moment.utc(epoch).format("HH:mm")
            mctTimeShort = moment.utc(mctEpoch).format("HH:mm")
            ectDateShort = moment.utc(epoch).format("D MMM")
            mctDateShort = moment.utc(mctEpoch).format("D MMM")

            var diffCheck = moment.utc(moment(mctEpoch).diff(moment(epoch))).format()


            var maxTime = moment(epoch).add(8, 'hours') //mct plus 8 hours
            var maxTimeHours = new Date(maxTime).valueOf()
            var minTime = moment(maxTimeHours).add(30, 'minutes') // mct plus 5 hours
            var totalMaxTime = new Date(minTime).valueOf()
            console.log("totalMaxTime", totalMaxTime)
            console.log("mctEpoch", mctEpoch)


            if (ectDateShort == mctDateShort){
              $.ajax({
                method: "POST",
                url: "/database",
                data: { date: ectDateShort,
                        ect: ectTimeShort,
                        ectEpoch: epoch,
                        mct: mctTimeShort,
                        mctEpoch: mctEpoch
                       }
              })
              $('#mct-input').val('')
              $('#ect-input').val('')
            } else {
              $("#error").show()

            }


/*

            if (ectDateShort == mctDateShort && totalMaxTime < mctEpoch){
              $.ajax({
                method: "POST",
                url: "/database",
                data: { date: ectDateShort,
                        ect: ectTimeShort,
                        ectEpoch: epoch,
                        mct: mctTimeShort,
                        mctEpoch: mctEpoch
                       }
              })
              $('#mct-input').val('')
              $('#ect-input').val('')
            } else {
              $("#error").show()

            }
            */
        })
      }

listen()

var intervalHours  = 0
var intervalMinutes = 0
var intervalSeconds = 0
$('#hours').html(0)
$('#minutes').text(0)
$('#seconds').text(0)

var intervalMct = setInterval(countdownTimer, 1000)

function timeType(){
  var todayEpochVal = parseInt($("#todays-date-gtm-epoch").html())
  var mctPage = parseInt($("#mct-epoch").text())
  var ectPage = parseInt($("#ect-epoch").text())


    if(todayEpochVal < mctPage ){
      timeZone = "MCT"
    } else if (todayEpochVal < ectPage && mctPage < ectPage){
      timeZone = "ECT"
    }
}

function countdownTimer(){
  timeType()

      mctEpoch = $("#mct-epoch").html()
      ectEpoch = $("#ect-epoch").html()

   if (timeZone == "MCT"){
        intervalHours  =moment.duration(mctEpoch - moment().tz('Europe/London')).hours()
        intervalMinutes = moment.duration(mctEpoch - moment().tz('Europe/London')).minutes()
        intervalSeconds = moment.duration(mctEpoch - moment().tz('Europe/London')).seconds()
        hours = $('#hours').text(intervalHours)
        minutes = $('#minutes').text(intervalMinutes)
        seconds = $('#seconds').text(intervalSeconds)

    } else if (timeZone == "ECT" && intervalHours == 0  && intervalMinutes == 0 && intervalSeconds < 0){
      console.log("hellooooo bizcuit")
      hours = $('#hours').text(0)
      minutes = $('#minutes').text(0)
      seconds = $('#seconds').text(0)
      intervalHours  = 0
      intervalMinutes = 0
      intervalSeconds = 0

      clearInterval(intervalMct)

   } else if (timeZone == "ECT"){
        intervalHours  = moment.duration(ectEpoch - moment().tz('Europe/London')).hours()
        intervalMinutes = moment.duration(ectEpoch - moment().tz('Europe/London')).minutes()
        intervalSeconds = moment.duration(ectEpoch - moment().tz('Europe/London')).seconds()
        hours = $('#hours').text(intervalHours)
        minutes = $('#minutes').text(intervalMinutes)
        seconds = $('#seconds').text(intervalSeconds)
      }

  alertNotifiction()

  return setInterval
}

$("#show-data").click(function(e) {
  e.preventDefault();
  $("#enter-data").show()
  $("#show-data").hide()
});

$("#check-data").click(function(e) {
  e.preventDefault();
  $("#enter-data").hide()
  $("#show-data").show()
});

function alertNotifiction(){
  if (intervalHours == 0 && intervalMinutes == 29 && intervalSeconds < 59 && intervalSeconds > 45) {
     thirtyMinutes()
     $("#time-input").hide()
    document.body.appendChild(soundThirty).play()
  } else if (intervalHours == 0 && intervalMinutes == 29 && intervalSeconds == 44){
      $( "audio" ).remove( "#audio" )
      $("#time-input").show()
  } else if(intervalHours == 0 && intervalMinutes == 14 && intervalSeconds < 59 && intervalSeconds > 45) {
     fifteenMinutes()
     $("#time-input").hide()
      document.body.appendChild(soundFifteen).play()
  } else if (intervalHours == 0 && intervalMinutes == 14 && intervalSeconds == 44) {
      $( "audio" ).remove( "#audio" )
      $("#time-input").show()
  } else if (intervalHours == 0 && intervalMinutes == 4  && intervalSeconds < 59 && intervalSeconds > 45) {
      $("#time-input").hide()
     fiveMinutes()
     document.body.appendChild(soundFive).play()
  } else if (intervalHours == 0 && intervalMinutes == 4 && intervalSeconds == 44 ) {
      $( "audio" ).remove( "#audio" )
      $("#time-input").show()
  } else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds < 15 && intervalSeconds > 0) {
      zeroMinutes()
      $("#time-input").hide()
      document.body.appendChild(soundEnd).play()
      timeType()
  }  else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds == 0) {
      $("audio" ).remove( "#audio" )
      $("#time-input").show()
  }
}



//$('div.section:empty').hide();
$("#timer-message").hide()

  function thirtyMinutes(){
    $("#timer-message").show()
    document.getElementById("timer-message").innerHTML = "30 minutes ....";
    $('#timer-message').fadeOut(500).fadeIn(500)
    setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 );
  }

  function fifteenMinutes()  {
    $("#timer-message").show()
    document.getElementById("timer-message").innerHTML = "15 minutes ....";
    $('#timer-message').fadeOut(500).fadeIn(500);
    setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 );
  }

  function fiveMinutes()  {
    $("#timer-message").show()
     document.getElementById("timer-message").innerHTML = "5 minutes ....";
     $('#timer-message').fadeOut(500).fadeIn(500);
     setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 );
  }

  function zeroMinutes(){
    $("#timer-message").show()
    document.getElementById("timer-message").innerHTML = "times up ....";
     $('#timer-message').fadeOut(500).fadeIn(500).addClass("timer-message");
     setTimeout ( 'document.getElementById("timer-message").innerHTML = ""', 500 )
   }



module.exports = {
  momentUctLong:momentUctLong,
  gtmTime:gtmTime,
}




})
