
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
  if (intervalHours == 0 && intervalMinutes == 30){
     alert("30 minutes to go.. tick tock")
  } else if(intervalHours == 0 && intervalMinutes == 15){
      alert("15 minutes to go.. tick tock")
  } else if (intervalHours == 0 && intervalMinutes == 5) {
      alert("5 minutes to go.. tick tock")
  } else if (intervalHours == 0 && intervalMinutes == 0 && intervalSeconds == 0)
        alert("times up")
        clearInterval(intervalID)
}


/*function countdownTimer(){
    var countdownTimer = dateHelpers.countdownTimer(gtmTime)
  }
  */


module.exports = {
  listen:listen,
  momentUctLong:momentUctLong,
  gtmTime:gtmTime,
}
