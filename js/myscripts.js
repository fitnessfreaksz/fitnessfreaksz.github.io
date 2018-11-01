function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
	addlow()
document.bmiForm.meaning.value = "That you are too thin."
	
}
if(finalBmi > 18.5 && finalBmi < 25){
	addgood()
document.bmiForm.meaning.value= "That you are healthy."
	
}
if(finalBmi > 25){
	addhigh()
document.bmiForm.meaning.value = "That you have overweight."
	
}
}
else{
alert("Please Fill in everything correctly")
}
}

function addhigh(){
	var high=document.getElementById("ulid")
	high.innerHTML="<li> Check Out Body Lose Plans down</li> <a href='build.html'>Click Here</a>"
	
}
function addlow(){
	var low=document.getElementById("ulid")
	
	low.innerHTML="<li>Do More Of Full Body Workout With Good Neutrition InTake<br> check Our Body Buling Plans To gain Weight</li><a href='build.html'>Click Here</a>"
	
}
function addgood(){
	var good=document.getElementById("ulid")
	good.innerHTML="<li> Do Plank For Abs</li><li>Do Arms and Chest to Build More</li>"
}



var myInter;
display = document.getElementById("time")
//CoutnDown Timer
function stop(){
    clearInterval(myInter);
    display.textContent="00:00";
}

function startTimer(duration) {
    clearInterval(myInter);
    var timer = duration, minutes, seconds;
	
    myInter=setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            alert("Stop and Rest");
			clearInterval(myInter);
        }
    }, 1000);
}


