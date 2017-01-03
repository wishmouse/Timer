

module.exports = startCoundown

function startCoundown(birthday){
  var birthday =  //
  var birthdayFormatted = new Date(birthday)
  var deathDate = new Date(birthday).setFullYear(birthdayFormatted.getFullYear() + 81.25 )
  var deathDateFormatted = new Date(deathDate)
  var today = new Date()
  var difference = today-birthdayFormatted
  var age = Math.floor(difference/31536000000);
  countdown(.......)
}

function countdown(deathDateFormatted, timer, callback){
  var second = 1000
  var minute = second * 60
  var hour = minute * 60
  var day = hour * 24
  var year = day * 365
  var end =  new Date(deathDate)


  function calculateRemainingTime(){
    var now = new Date()
    var remaining = end.getTime()-now.getTime()

    if(isNaN(end)){
      console.log("err");
      return;
    }

    if(remaining <= 0){
      clearInterval(timer);
      if(typeof callback === 'function'){
        callback();
      }
    } else {
    }

    var data = {
      'years': Math.floor(remaining / year),
      'days': Math.floor((remaining % year) / day),
      'hours': Math.floor((remaining % day) / hour),
      'minutes': Math.floor((remaining % hour) / minute),
      'seconds': Math.floor((remaining % minute) / second)
    }
  }
  calculateRemainingTime()
}


