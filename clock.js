function displayTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = (hours < 12) ? "AM" : "PM";


  hours = (hours < 10) ? "0" + hours : hours;
  if (hours == 0) {
    hours = 12;
  }
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var time = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("clock").innerHTML = time;

  var t = setTimeout(displayTime, 1000);
}

displayTime();
