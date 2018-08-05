var box_top=0;
var box_left=760;

var el1 = document.getElementById('big-box');
var el2 = document.getElementById('small-box');


function Box(top){
	this.anim= function(e){
	if (e.keyCode==83){
		console.log(e.keycode)
		box_top+=15;							//Box Move down
		el1.style.top = box_top + 'px';

		if (box_top>=540){
			el1.style.top= 540 +'px';
			box_top=540;
		} 
	}

	if (e.keyCode==87){
		console.log(e.keycode)					//Box Move Up
		box_top-=15;
		el1.style.top = box_top + 'px';

		if (box_top<=0){
			el1.style.top= 0 +'px';
			box_top=0;	
		} 
	}

	this.style = window.getComputedStyle ? getComputedStyle(el1, null) : el1.currentStyle;
	// console.log(style.top);
	this.Box_top= parseInt(this.style.top);
	
	
}
this.top= this.Box_top;


}

var box1= new Box(2);
var b= box1.two;
console.log(b);

document.onkeydown= box1.anim;


function loop(){
	// console.log(box1.two);
	box_left -=7;
	el2.style.left= box_left + 'px';
	var animate= setTimeout(loop, 20);
}

loop();