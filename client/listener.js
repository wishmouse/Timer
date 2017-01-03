var $ = require('jquery')
var controller = require('./controller')
var dateHelpers = require('./dateHelpers')

var todaysDate = dateHelpers.today()
var todaysTime = dateHelpers.currentTime()
var gtmTime = dateHelpers.timeGtm()

function listen(){
    $("#todays-date").append(todaysDate)
    $("#todays-time").append(todaysTime)
    $("#todays-time-gtm").append(gtmTime)

    dateMatch()
    countdownTimer()
}

function dateMatch(){
  if (todaysDate == '3 Jan'){
    $('#mct-time').html('03:00')
    $('#ect-time').html('23:00')
  }
}

function countdownTimer(){
    var countdownTimer = dateHelpers.countdownTimer(gtmTime)
  }

module.exports = {
  listen:listen
}
