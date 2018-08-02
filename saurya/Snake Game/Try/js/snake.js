//for defining a unit movement for snake
const box = 20;


function Snake(head, type, speed, style, mainId){

	this.Head = head;
	this.Type = type;
	this.Speed = speed;
	this.Style = style;
	this.MainId = mainId;

	var xc = 260;
	var yc = 200;

	this.init = function(){
		this.canvasElement = document.createElement("div");
		this.canvasElement.className = "canvasElement";
		var mainElement = document.getElementById(this.MainId);
		mainElement.appendChild(this.canvasElement);

		this.headElement = document.createElement("div");
		this.headElement.className = "headElement";
		this.headElement.setAttribute("id", "snakeHead");
		this.headElement.style.height = this.Head + "px";
		this.headElement.style.width = this.Head + "px";
		this.canvasElement.appendChild(this.headElement);


		// this.headElement.style.top = xc + "px";
		// this.headElement.style.left = yc + "px";
	}

	this.moveSnake = function(){
		var d;
		document.addEventListener("keydown", direction);
		function direction(event){
			let key = event.keyCode;
			
			if(key == 37 && d != "RIGHT"){d = "LEFT";}
			if(key == 38 && d != "DOWN"){d = "UP";}
			if(key == 39 && d != "LEFT"){d = "RIGHT";}
			if(key == 40 && d != "UP"){d = "DOWN";}
			if(key == 32){d = "null"}
			
			console.log(d);

		}

		function pushSnake(){

			if(d == "RIGHT"){xc += box;}
			if(d == "DOWN"){yc += box;}
			if(d == "LEFT"){xc -= box;}
			if(d == "UP"){yc -= box;}

			console.log("(x, y):" + "(" + xc + ", " + yc + ")");
			snObj = document.getElementById("snakeHead");
			snObj.style.top = yc + "px";
			snObj.style.left = xc + "px";


		}

		let game = setInterval(pushSnake, 100);

	}



	



	

	//defining an object to manipulate html div from js
	// MovObj = document.getElementById("object");
	// snakeC = document.getElementById("object");
	// console.log(snakeC.style.top);


	// function MovObj(){
	// 	document.addEventListener("keydown", direction);
	// 	function direction(event){
	// 		if(event.keycode == 37){
	// 			d ="LEFT";
	// 			snakeX -= box;
	// 		}
	// 		else if(event.keycode == 38){
	// 			d ="UP";
	// 		}	snakeY -= box;
	// 		else if(event.keycode == 39){
	// 			d ="RIGHT";
	// 			snakeX += box;
	// 		}
	// 		else if(event.keycode == 40){
	// 			d ="DOWN";
	// 			snakeY += box;
	// 		}

	// 		snakeC.style.top = snakeY + "px";
	// 		snakeC.style.left = snakeX + "px";


	// 		// if( d == "LEFT") snakeX -= box;
	// 	 //    if( d == "UP") snakeY -= box;
	// 	 //    if( d == "RIGHT") snakeX += box;
	// 	 //    if( d == "DOWN") snakeY += box;
	// 	}
	// }

}
// let start = setInterval(Snake, 50);