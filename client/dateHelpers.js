var momentCountdown = require('moment-countdown')
var moment = require('moment');
var momentZone = require('moment-timezone')
var $ = require('jquery')
var listen = require('./listener')


moment() .format();


function today(){
  return moment().format('D MMM')
}

function timeGtm(){
  var localTime = moment()
  return localTime.tz('Europe/London').format()
}


function currentTime(){
  return moment().format('HH:mm')
}

function countdownTimer(){
  var uctTime = listen.momentUctLong
   console.log("this is momentUctLongTime", uctTime)
   var currentGtm = listen.gtmTime
   console.log("this is gtmTimeValue", currentGtm)
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
  today:today,
  currentTime:currentTime,
  timeGtm:timeGtm,
  countdownTimer:countdownTimer
}
