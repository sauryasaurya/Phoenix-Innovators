const g=9.81;

function main_fxn(){
	var angle=document.getElementById("ang").value;
	var velocity= document.getElementById("vel").value;
	// var angle= document.getElementById("ang").value;
	console.log("velocity=",velocity);
	

	angle=(3.14/180)*angle;
	console.log("angle=", angle);

	var t= (2*velocity*Math.sin(angle))/g;
	console.log("flight_time=", t);

	var h=(velocity*velocity*Math.sin(angle)*Math.sin(angle)/(2*g));
	var r=velocity*velocity*Math.sin(2*(angle));

	console.log("height=", h);
	console.log("range=", r);

	for(i=1; i<=t; i++){
		var x=velocity*Math.cos(angle)*i;
		var y=velocity*Math.sin(angle)*i-0.5*g*i*i;
		console.log(x,y);
	}
}

