//for defining a unit movement for snake
const box = 20;
var delay = 60;

//array for snake body and its x and y coordinate
var snakeBody = [];
var snakeBodyX = [];
var snakeBodyY = [];

function Snake(head, type, speed, style, mainId){
	this.Head = head;
	this.Type = type;
	this.Speed = speed;
	this.Style = style;
	this.MainId = mainId;

	//to setup initial coordinate for snake head
	var xc = 260;
	var yc = 200;

	//to setup initial coordinate for food
	var fxc = 300;
	var fyc = 100;

	this.init = function(){
		//to initialize canvas for game
		this.canvasElement = document.createElement("div");
		this.canvasElement.setAttribute("id", "canvas");
		this.canvasElement.className = "canvasElement";
		var mainElement = document.getElementById(this.MainId);
		mainElement.appendChild(this.canvasElement);

		//to initialize snake head
		this.headElement = document.createElement("div");
		this.headElement.setAttribute("id", "snakeHead");
		this.headElement.className = "headElement";
		this.headElement.style.height = this.Head + "px";
		this.headElement.style.width = this.Head + "px";
		this.canvasElement.appendChild(this.headElement);

		//to initialize food element
		this.foodElement = document.createElement("div");
		this.foodElement.setAttribute("id", "snakeFood");
		this.foodElement.className = "foodElement";
		this.canvasElement.appendChild(this.foodElement);
		
	}

	this.moveSnake = function(){
		//creating and initializing audio objects

		var d;//direction variable

		var count = 0;
		var length = 1;
		//creating canvas object
		var canObj = document.getElementById("canvas");
		//creating snake and food object
		var snHead = document.getElementById("snakeHead");
		var fdObj = document.getElementById("snakeFood");

		//creating object for score
		var scoreObj = document.getElementById("score");

		//checking which key is pressed
		document.addEventListener("keydown", direction);
		function direction(event){
			let key = event.keyCode;			
			if(key == 37 && d != "RIGHT"){d = "LEFT";}
			if(key == 38 && d != "DOWN"){d = "UP";}
			if(key == 39 && d != "LEFT"){d = "RIGHT";}
			if(key == 40 && d != "UP"){d = "DOWN";}
			if(key == 32){d = "null";}
			
			// console.log(d);

		}

		let game = setInterval(pushSnake, delay);

		function pushSnake(){

			//changing coordinate according to last key pressed
			if(d == "RIGHT"){xc += box; }
			if(d == "DOWN"){yc += box;}
			if(d == "LEFT"){xc -= box;}
			if(d == "UP"){yc -= box;}

			//when snake collides with border
			if(xc < 0 || xc > 580 || yc < 0 || yc > 380){
			if(xc < 0){xc = 0};
			if(xc > 580){xc = 580};
			if(yc < 0){yc = 0};
			if(yc > 380){yc = 380};

				clearInterval(game);
				scoreObj.style.color = "red";
				scoreObj.style.fontSize = "40px";
				scoreObj.innerHTML = ("Game Over!! " + "Your score is " + (length - 1));
			}

			

			//adding additional body to snakeBody array
			if(d == "LEFT" || d == "RIGHT" || d =="UP" || d =="DOWN"){
				snakeBody.push("SnakeBody" + count);
				snakeBody[count] = document.createElement("div");
				// snakeBody[count].setAttribute("id", "SnakeBody" + count);
				snakeBody[count].className = "bodyElement";
				canObj.appendChild(snakeBody[count]);
				snakeBodyX[count] = xc;
				snakeBodyY[count] = yc;

				snakeBody[count].style.left = snakeBodyX[count] + "px";
				snakeBody[count].style.top = snakeBodyY[count] + "px";

				
				count++;
			}

			//asigning dynamic coordinate to snake object & food object
			snHead.style.top = yc + "px";
			snHead.style.left = xc + "px";

			fdObj.style.top = fyc + "px";
			fdObj.style.left = fxc + "px";

			//collision detection with food and randomizing food coordinate
			if(snHead.style.top == fdObj.style.top &&
			   snHead.style.left == fdObj.style.left){
				fxc = Math.floor(Math.random()*30) * box;
				fyc = Math.floor(Math.random()*20) * box;
				length++;
				scoreObj.innerHTML = ("Score: " + (length - 1));
			}else if(count > length){
					canObj.removeChild(snakeBody[count - length - 1]);

					
				}
			//when snake collides with its own body
			for(let i=count - 1; i>=(count - length + 1); i--){
				if(snakeBody[i-1].style.top == snHead.style.top &&
					snakeBody[i-1].style.left == snHead.style.left){
					console.log("collision");
					clearInterval(game);
					clearInterval(game);
				scoreObj.style.color = "red";
				scoreObj.style.fontSize = "40px";
				scoreObj.innerHTML = ("Game Over!! " + "Your score is " + (length - 1));
				}
			}
			
			

		}

		

	}



}
