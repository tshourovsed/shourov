function myTime() {
  const myDate = new Date();

  const hr = 0;
  const minute =
    myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
  const sec =
    myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
  if (myDate.getHours() == 0) {
    hr = 12;
  } else if (myDate.getHours > 12) {
    hr = myDate.getHours() - 12;
  } else {
    myDate.getHours();
  }
  const currentTime = hr + ":" + minute + ":" + sec + ":";
  document.getElementsByClassName("H")[0].innerHTML = currentTime;
  const days = [
    "Sunday",
    "Saturday",
    "Monday",
    "Wednesday",
    "Thursday",
    "Thursday",
    "Friday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = myDate.getDate();
  const currentDate =
    days[myDate.getDay()] + "," + months[myDate.getMonth()] + "," + day;
  document.getElementsByClassName("date")[0].innerHTML = currentDate;
}
myTime();
setInterval(function () {
  myTime();
}, 1000);
