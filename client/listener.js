
var $ = require('jquery')
//var controller = require('./controller')
var dateHelpers = require('./dateHelpers')
var moment = require('moment');

var todaysDate = dateHelpers.today()
var todaysTime = dateHelpers.currentTime()
var gtmTime = dateHelpers.timeGtm()
console.log("this is gtmTime", gtmTime)
var time = ""
var epoch = ""
var momentUct = ""
var momentUctLong = ""
var difference = ""

function listen(){

  var gtmTimeShort = moment(gtmTime).tz('Europe/London').format("HH:mm:ss")
  console.log("this is gtmTimeShort", gtmTimeShort)
  var gtmDateShort = moment(gtmTime).tz('Europe/London').format("D MMM")
  console.log("this is gtmDateShort", gtmDateShort)

    $("#todays-date").append(todaysDate)
    $("#todays-time").append(todaysTime)
    $("#todays-time-gtm").append(gtmTimeShort)
    $("#todays-date-gtm").append(gtmDateShort)

    $('#time-submit').click(function(e){
    e.preventDefault()
          time = $('#mct-input').val()
          epoch = new Date(time).valueOf()
          momentUct = moment.utc(epoch).format("HH:mm:ss")
          momentUctLong = moment.utc(epoch).format()
          console.log("this is momentUctLong", momentUctLong)
          $('#mct-time').html(momentUct)

          difference = moment.utc(moment(momentUctLong,"DD-MM-YYYY HH:mm:ss").diff(moment(gtmTime,"DD-MM-YYYY HH:mm:ss"))).format("HH:mm:ss")
          console.log("this is difference", difference)

          countdownTimer()

        });
}

function countdownTimer(){
    var countdownTimer = dateHelpers.countdownTimer(gtmTime)
  }


module.exports = {
  listen:listen,
  momentUctLong:momentUctLong,
  gtmTime:gtmTime,
}
