
// Easter egg
var btn1=false;
var btn2=false;
var btn3=false;
var btn4=false;
var btn5=false;

function btnclick1(){
  btn1=true;
  alert("What are you doing?");
}

function btnclick2(){
  btn2=true;
  alert("You're wasting your time.");
}
  

function btnclick3(){
  btn3=true;
  alert("Clicking this has no use.");
}

function btnclick4(){
  btn4=true;
  alert("Give up. Now.");
}
  

function btnclick5(){
  btn5=true;
  alert("Really? Clicking these buttons give you entertainment?");
}

function btnclick6(){
  if (btn1 && btn2 && btn3 && btn4 && btn5){
    alert("Fine, here's your song change.");
    document.getElementById("musicsrc").src = "assets/bgmusic.mp3";
    document.getElementById("bgmusic").load();
  } else {
    alert("... Why did you click this button?");
    btn1=false;
    btn2=false;
    btn3=false;
    btn4=false;
    btn5=false;
    // reset
  }
}