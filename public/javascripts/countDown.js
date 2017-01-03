  var birthday = req.body.birthday
  var birthdayFormatted = new Date(birthday)
  console.log("birthdayFormatted",birthdayFormatted)

  var deathDate = new Date(birthday).setFullYear(birthdayFormatted.getFullYear() + 81 )
  var deathDateFormatted = new Date(deathDate)

  console.log("your death date:", deathDateFormatted)

  var today = new Date()
  var difference = today-birthdayFormatted
  var age = Math.floor(difference/31536000000);

  console.log('your age:', age)

  var countdown = function(deathDateFormatted, timer, callback){
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    year = day * 365,
    end =  new Date(deathDate),
    timer,
    calculate = function(){
      var now = new Date(),
      remaining = end.getTime()-now.getTime(),
      data;
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

      data = {
        'years': Math.floor(remaining / year),
        'days': Math.floor((remaining % year) / day),
        'hours': Math.floor((remaining % day) / hour),
        'minutes': Math.floor((remaining % hour) / minute),
        'seconds': Math.floor((remaining % minute) / second)
      }
    };
    calculate()
  }
  countdown()
