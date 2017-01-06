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



module.exports = {
  today:today,
  currentTime:currentTime,
  timeGtm:timeGtm,
}
