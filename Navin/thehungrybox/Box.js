
var gameOverObj = document.getElementById("gameover");
var scor= document.getElementById("score");
var highscore=0;



function myfxn(box_top){

var box_top= box_top;
var box_left=760;
var c=0;
var count= 0;
var duration= 20;
var s=0;


var el1 = document.getElementById('big-box');
var el2 = document.getElementById('small-box');

el1.style.top = box_top + 'px';
scor.innerHTML = "<h1 style='font-size: 25px;'>THE HUNGRY BOX</h1>" +
				"<p>(Press 'W' and 'S' to move the box)</p>" + "<h1>Score</h1>" + s + "<h1>High Score</h1>" + highscore + "<br><br><br><br>" + "<h1>GAME BY NAVIN</h1>";



function anim(e){
	if (e.keyCode==83){
		// console.log(e.keycode)
		box_top+=15;
		el1.style.top = box_top + 'px';
										    //Box Move down
		if (box_top>=540){
			el1.style.top= 540 +'px';
			box_top=540;
		} 
	}

	if (e.keyCode==87){
		// console.log(e.keycode)					//Box Move Up
		box_top-=15;
		el1.style.top = box_top + 'px';

		if (box_top<=0){
			el1.style.top= 0 +'px';
			box_top=0;	
		} 
	}

	// console.log(box_top);
}
document.onkeydown= anim;

var r= Math.floor(600*Math.random());
el2.style.top= r +'px';

function loop(){
	function Box(top, left){
		this.Top = top;
		this.Left = left;
		}
	
	var box1= new Box(box_top, 0);

	box_left -=7;
	el2.style.left= box_left + 'px';

	var box2= new Box(r, box_left);
	if(box2.Left < 60 &&(box2.Top >= box1.Top && box2.Top <= (box1.Top +60))){
			box2_repeat();
			s++;

			if(s >= highscore){
				highscore = s;
				scor.innerHTML = "<h1 style='font-size: 25px;'>THE HUNGRY BOX</h1>" +
				"<p>(Press 'W' and 'S' to move the box)</p>" + "<h1>Score</h1>" + s + "<h1>High Score</h1>" + highscore+ "<br><br><br><br>" + "<h1>GAME BY NAVIN</h1>";

			}
			else{
				scor.innerHTML = "<h1 style='font-size: 25px;'>THE HUNGRY BOX</h1>" +
				"<p>(Press 'W' and 'S' to move the box)</p>" + "<h1>Score</h1>" + s + "<h1>High Score</h1>" + highscore+ "<br><br><br><br>" + "<h1>GAME BY NAVIN</h1>";
			}
			

	}
	
	else if(box2.Left<-5){
		count++;
		box2_repeat();
		if(count==2){
			gameOverObj.style.display= "block";
			stopanimation();
		}
	}

	animate = setTimeout(loop, duration);

}
loop();


function box2_repeat(){
	box_left= 860;
			r= Math.floor(500*Math.random());
			el2.style.top= r +'px';
			c++;
			if(c%2==0){
				duration -=1;
			}
}

}
myfxn(0);

function clickfxn(){
	gameOverObj.style.display= "none";
	myfxn(0);
}

