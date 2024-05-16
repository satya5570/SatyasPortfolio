function display_ct5() {
  var x = new Date();
  var ampm = x.getHours() >= 12 ? " PM" : " AM";

  var x1 =
    "Date : " + x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear();
  var x2 =
    "Time : " +
    x.getHours() +
    ":" +
    x.getMinutes() +
    ":" +
    x.getSeconds() +
    ampm;
  document.getElementById("datediv").innerHTML = x1;
  document.getElementById("timediv").innerHTML = x2;
  display_c5();
}
function display_c5() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct5()", refresh);
}
display_c5();
