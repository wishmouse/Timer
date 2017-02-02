var momentCountdown = require('moment-countdown')
var moment = require('moment');
var momentZone = require('moment-timezone')
var $ = require('jquery')
var listen = require('./index')
var gtmDateVal
var timeData


$.ajax({
  url: "/api",
  success: function(result){
    timeData = JSON.parse(result)
    }

})

moment() .format();

function dateGtm(){
  setInterval(function(){
    var day = moment.utc().format("D")
    var month = moment.utc().format("MMM")
    var second = moment.utc().format("ss")
    var gtmDateVal = day +" "+ month
    var todayEpoch = new Date(moment.utc()).valueOf()
    $("#todays-date-gtm").text(gtmDateVal)
    $("#todays-date-gtm-epoch").text(todayEpoch)
    for (var j = 0; j < timeData.length; j++){
        allData = timeData[j]
        if(allData.date == gtmDateVal){
          $("#mct-time").text(allData.mct)
          $("#ect-time").text(allData.ect)
          $("#ect-epoch").text(allData.ectEpoch)
          $("#mct-epoch").text(allData.mctEpoch)
        }
      }
  }, 1000
  )

  return setInterval
}


function timeGtm(){
  var localTime = moment()
  localTime.utc().format()
  setInterval(function(){

    var hours = moment.utc().format('HH')
    var minutes = moment.utc().format('mm')
    var seconds = moment.utc().format('ss')

    $("#todays-time-gtm").text(hours +':'+ minutes +':'+ seconds)
  }, 1000
  )
  return setInterval
}


var hours = moment().format("HH")
var minutes = moment().format("mm")
var seconds = moment().format("ss")

function currentDate(){
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
    var hours = moment().format("HH")
    var minutes = moment().format("mm")
    var seconds = moment().format("ss")

    $("#todays-time").text(hours +':'+ minutes +':'+ seconds)
  }, 1000
  )
  return setInterval
}

module.exports = {
  currentDate:currentDate,
  currentTime:currentTime,
  timeGtm:timeGtm,
  dateGtm:dateGtm,
}
