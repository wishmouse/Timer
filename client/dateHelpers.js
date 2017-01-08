var momentCountdown = require('moment-countdown')
var moment = require('moment');
var momentZone = require('moment-timezone')
var $ = require('jquery')
var listen = require('./listener')


moment() .format();


function currentDate(){
  console.log("this is today")
  setInterval(function(){
    var day = moment().format("DD")
    var month = moment().format("MMM")
    var second = moment().format("ss")

    $("#todays-date").text(day +" "+ month)
  }, 1000
  )
  return setInterval
}

function currentTime(){
  setInterval(function(){
    var hours = moment().hours()
    var minutes = moment().minutes()
    var seconds = moment().seconds()

    $("#todays-time").text(hours +':'+ minutes +':'+ seconds)
  }, 1000
  )
  return setInterval
}

function timeGtm(){
  var localTime = moment()
  localTime.utc().format()
  setInterval(function(){
    var hours = moment.utc().hours()
    var minutes = moment.utc().minutes()
    var seconds = moment.utc().seconds()

    $("#todays-time-gtm").text(hours +':'+ minutes +':'+ seconds)
  }, 1000
  )
  return setInterval
}

function dateGtm(){
  setInterval(function(){
    var day = moment.utc().format("DD")
    var month = moment.utc().format("MMM")
    var second = moment.utc().format("ss")

    $("#todays-date-gtm").text(day +" "+ month)
  }, 1000
  )
  return setInterval
}

function countdownTimer(){
   setInterval(function(){
     var hours = moment.utc(moment(uctTime,"DD-MM-YYYY HH:mm:ss").diff(moment(currentGtm,"DD-MM-YYYY HH:mm:ss"))).hours()
     var minutes = moment.utc(moment(uctTime,"DD-MM-YYYY HH:mm:ss").diff(moment(currentGtm,"DD-MM-YYYY HH:mm:ss"))).minutes()
     var seconds = moment.utc(moment(uctTime,"DD-MM-YYYY HH:mm:ss").diff(moment(currentGtm,"DD-MM-YYYY HH:mm:ss"))).seconds()

     $('#hours').text(hours)
     $('#minutes').text(minutes)
     $('#seconds').text(seconds)
   }, 1000
   )
   return setInterval
 }

module.exports = {
  currentDate:currentDate,
  currentTime:currentTime,
  timeGtm:timeGtm,
  dateGtm:dateGtm, 
  countdownTimer:countdownTimer
}
