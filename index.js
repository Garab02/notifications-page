
document.getElementById("marker").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("unread1").style.background = 'white';
  document.getElementById("unread2").style.background = 'white';
  document.getElementById("unread3").style.background = 'white';

  document.getElementById("num").innerHTML = 0;
}