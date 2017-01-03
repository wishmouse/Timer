var momentCountdown = require('moment-countdown')
var moment = require('moment');
var momentZone = require('moment-timezone')
var $ = require('jquery')

moment() .format();


function today(){
  return moment().format('D MMM')
}

function timeGtm(){
  var localTime = moment()
  return localTime.tz('Europe/London').format('HH:mm')
}

function currentTime(){
  return moment().format('HHmm')
}


function countdownTimer(timeGtm){
  setInterval(function(){
    var mctTime = 0300
    var hours = moment.duration(mctTime - moment().tz('Europe/London')).hours()
    var minutes = moment.duration(mctTime - moment().tz('Europe/London')).minutes()
    var seconds = moment.duration(mctTime - moment()).seconds()

    $('#hours').text(hours)
    $('#minutes').text(minutes)
    $('#seconds').text(seconds)
  }, 1000
  )
  return setInterval
}

/*
function countdownTimer(dateOfBirth){
  setInterval(function(){
    var deathDate = moment(dateOfBirth).add(81.251, 'years')
    var minutes = moment.duration(deathDate - moment()).minutes()
    var seconds = moment.duration(deathDate - moment()).seconds()
    $('#years').text(years)
    $('#months').text(months)
    $('#days').text(months)
    $('#minutes').text(minutes)
    $('#seconds').text(seconds)
  }, 1000
  )
  return setInterval
}
*/

module.exports = {
  today:today,
  currentTime:currentTime,
  timeGtm:timeGtm,
  countdownTimer:countdownTimer,
}
