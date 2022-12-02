var orderBody = document.getElementById('orderBody');
var clockButton = document.getElementById('clockButton');
  function makeOrder(){
    orderBody.style.display = 'block';
    clockButton.style.display = 'none';
  }
  function closeOrderBody(){
    clockButton.style.display = 'block';
    orderBody.style.display = 'none';
  }

var noon = 12;
var evening = 18; 
var wakeUpTime = 9; 
var lunchTime = 12; 
var partyTime = 17; 
var napTime = lunchTime + 2;
var time = new Date().getHours();

var updateClock = function(){

	var messageText;
	var message = document.getElementById("timeEvent");
	var lolcat = document.getElementById("lolcat");
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if (time == partyTime){
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
   	 messageText = "Время вечеринки!";
	}
	else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
   		messageText = "Время идти баиньки!";
	}
	else if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    	messageText = "Время садиться за стол!";
	}
	else if (time == wakeUpTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    	messageText = "Время вставать!";
	}
	else if (time < noon) {
    	messageText = "Доброе утро!";
	}
	else if (time > evening) {
		messageText = "Добрый вечер!";
	}
	else {
    	messageText = "Доброй ночи!!";
	}

	message.innerText = messageText;
	lolcat.src = image;

	showCurrentTime();

};

var showCurrentTime = function(){
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (hours > noon)
    {
        hours = hours - 12;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds;

    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Время вечеринки!";
      partyTimeButton.style.backgroundColor = "#222";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "Вечеринка закончилась!";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener('click', partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};

var napEvent = function()
{
	napTime = napTimeSelector.value;
};

var lunchEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
napTimeSelector.addEventListener("change", napEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);