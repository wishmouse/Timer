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
          console.log("epoch", epoch)
          var longDate = new Date(epoch)
          console.log("human readable date", longDate)
          var momentUct = moment.utc(epoch).format()
          console.log("moment UCT", momentUct)
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
