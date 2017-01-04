var $ = require('jquery')
//var controller = require('./controller')
var dateHelpers = require('./dateHelpers')
var moment = require('moment');

var todaysDate = dateHelpers.today()
var todaysTime = dateHelpers.currentTime()
var gtmTime = dateHelpers.timeGtm()


function listen(){
    $("#todays-date").append(todaysDate)
    $("#todays-time").append(todaysTime)
    $("#todays-time-gtm").append(gtmTime)

    $('#time-submit').click(function(e){
    e.preventDefault()
          var time = $('#mct-input').val()
          var epoch = new Date(time).valueOf()
          //var longDate = new Date(epoch)
          var momentUct = moment.utc(epoch).format("HH:mm")
          $('#mct-time').html(momentUct)
        });

    dateMatch()
    countdownTimer()
}

function dateMatch(){
  if (todaysDate == '4 Jan'){
    $('#mct-time').html('03:00')
    $('#ect-time').html('23:00')
  }
}

function countdownTimer(){
    var countdownTimer = dateHelpers.countdownTimer(gtmTime)
  }



module.exports = {
  listen:listen,
}
