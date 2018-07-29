const GRAVITY = 9.8;

// projectile function
function Projectile(vel, ang){
	this.velocity = vel;
	this.angle = ang;

	this.showProperties = function(){
		console.log("Velocity:" + this.velocity);
		console.log("Angle:" + this.angle);
	}


	this.findPath = function(){
		var tvelocity = this.velocity;
		var tangle = this.angle;
		var xc = 0;
		var yc = 0;
		var t = 0;

		var anim_object = document.getElementById("anim-object-1");
		var animId = setInterval(function(){
			xc = Math.floor(tvelocity * Math.cos(tangle * Math.PI / 180) * t);
			yc = Math.floor(tvelocity * Math.sin(tangle * Math.PI / 180) * t - 0.5 * GRAVITY * t * t);
			t += 0.1;
			yc = 500 - yc;
			anim_object.style.top = yc + 'px';
			anim_object.style.left = xc + 'px';
			if (xc > 1000 || yc > 540) {
				clearInterval(animId);
			}
			console.log("(x,y):(" + xc + "," + yc + ")");
		},20);



		// for(var t = 0; yc >=0;t += 0.1){
		// 	xc = Math.floor(tvelocity * Math.cos(tangle * Math.PI / 180) * t);
		// 	yc = Math.floor(tvelocity * Math.sin(tangle * Math.PI / 180) * t - 0.5 * GRAVITY * t * t);
		// 	console.log("(x,y):(" + xc + "," + yc + ")");
		// }
	}
}