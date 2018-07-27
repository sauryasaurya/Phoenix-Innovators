const G=9.81;
var h;
var r;
var animate;

function main_fxn(){
	var ang= parseInt(document.getElementById("ang").value);
	var vel= parseInt(document.getElementById("vel").value);
	var animation= document.getElementById("ball");
	t= 0 ;


	var anim = setInterval(function(){

		r=Math.floor(vel * Math.cos(ang * Math.PI / 180) * t);
		h = Math.floor(vel * Math.sin(ang * Math.PI / 180) * t - 0.5 * G * t * t);
		console.log(h);
		t += 0.1;
		h= 370-h;
		animation.style.top = h + 'px';
		animation.style.left= r+ 'px';

		if(r>1200 || h>370){
			clearInterval(anim);
		}
	},15)
	
}
function reset(){
	var rst= document.getElementById("ball");
	rst.style.top = 370 + 'px';
	rst.style.left= 0 + 'px';
}
