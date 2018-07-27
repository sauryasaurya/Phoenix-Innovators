function Projectile(vel, ang, tim){
	this.velocity = vel;
	this.angle = ang;
	this.time = tim;
	this.gravity = 9.8;
	this.printProperties = function(){
		console.log("Vel:" +  this.velocity);
		console.log("Angle:" +  this.angle);
		console.log("Time:" +  this.time);
	}
	this.printTrajectory = function(){
		var xc,yc;
		var t = 0;

		do{
			xc = Math.floor(this.velocity * t * Math.cos(this.angle * Math.PI/180.0));
			yc = Math.floor(this.velocity * t * Math.sin(this.angle * Math.PI/180) - 0.5 * this.gravity * t * t);
			console.log('(x,Y):(' + xc + ',' + yc + ')');
			t += 0.1;
		}while(yc >= 0);
	}
}