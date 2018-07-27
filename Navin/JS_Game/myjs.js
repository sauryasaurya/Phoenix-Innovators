const g=9.81;
var h_pos;
var r_pos;

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
	var r=(velocity*velocity*Math.sin(2*(angle)))/g;

	console.log("height=", h);
	console.log("range=", r);

	var elem = document.getElementById("ball-main-div");
	
	for(i=0; i<=t; i+=0.1){
		// setInterval(function(){
		// 	var x=velocity*Math.cos(angle)*i;
		// 	var y=velocity*Math.sin(angle)*i-0.5*g*i*i;
		// 	var r_pos= Math.trunc(1093/254*x);
		// 	var h_pos= Math.trunc(300/127*(y));
		// 	elem.style.top = (280-h_pos) + 'px'; 
		//     elem.style.left = r_pos + 'px';
		
	 //      	},300);
		var x=velocity*Math.cos(angle)*i;
		var y=velocity*Math.sin(angle)*i-0.5*g*i*i;

		var r_pos= Math.trunc(1093/254*x); //Normalization
		var h_pos= Math.trunc(300/127*(y));

		elem.style.top = (280-h_pos) + 'px'; 
	    elem.style.left = r_pos + 'px';
		
		console.log(x,y);
		// console.log(r_pos); 

      	// console.log(elem.style.top);
      	// console.log(elem.style.left);

      	// elem.style.top = (280-h_pos) + 'px'; 
      	// 	elem.style.left = h_pos + 'px'; 

 //      	var id = setInterval(frame(), 4);
 //      	  		function frame() {
 //      	    		if (r_pos > 500) {
 //      	      		clearInterval(id);
 //      	    	  }

 //    	  else { 
 //    	  	// var r_pos= Math.trunc(1093/254*x);
	// 		var r_pos= Math.trunc(1093/254*x);
	// 		var h_pos= Math.trunc(300/127*(y));
 //      		elem.style.top = (280-h_pos) + 'px'; 
 //      		elem.style.left = r_pos + 'px'; 
 //    	  }
	// }
}
}

