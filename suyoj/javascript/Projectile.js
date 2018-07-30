function hitProjectile() {

    //Defining Gravity as Constant.
    const GRAVITY = 9.8;

    // Taking input value from the user.
    var velocity = parseInt(document.getElementById("velocity").value);
    var angle = parseInt(document.getElementById("angle").value);

    //Checking in the console whether the value is being passed or not.
    console.log("The user input for velocity is : " + velocity);
    console.log("The user input for angle is :" + angle);

    //Defining the x-cordinate and y-cordinate
    var xc;
    var yc;

    //Defining the time
    var t = 0;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.translate(0, 150);
   
    //Finding new Co-ordinates
    for (t = 0; t < 10; t = t + 0.1) {
        xc = Math.floor(velocity * Math.cos(angle * Math.PI / 180) * t);
        yc = -(Math.floor(velocity * Math.sin(angle * Math.PI / 180) * t - 0.5 * GRAVITY * t * t));

        console.log("(x,y)="+"("+xc+","+yc+")");
        
        ctx.lineTo(xc,yc);
        ctx.stroke();
        }
       
    }


 
