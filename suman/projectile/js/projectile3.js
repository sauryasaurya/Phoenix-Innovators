// function to change degree to rad
function degToRad(angle) {
    // console.log('Angle in rad ' + (angle * Math.PI / 180));
    return angle * Math.PI / 180;
}

// Main function
function init() {
    // For Canvas
    var theCanvas = document.getElementById("theCanvas");
    var theContext = theCanvas.getContext("2d");

    const G = 9.81;
    var velocity = parseInt(document.getElementById("vel").value);
    var angle = degToRad(parseInt(document.getElementById("angle").value));

    var xCord = 0;
    var yCord = 0;
    var initTime = 0.01;

    while (yCord >= 0) {
        var coor = rotate(xCord, yCord);
        theContext.moveTo(coor[0], coor[1]);

        xCord = calculateX(velocity, angle, initTime);
        yCord = calculateY(velocity, angle, initTime, G);

        console.log('X-Coordinate ' + xCord + ' Y-Coordinate ' + yCord);
        console.log('----------------------------------------------------');

        var coor = rotate(xCord, yCord);
        theContext.lineTo(coor[0], coor[1]);
        theContext.stroke();
        initTime += 0.01;
    }
}

// Function to calulate coordinates
function calculateX(vx, angle, t) {
    return Math.floor(vx * Math.cos(angle) * t);
};

function calculateY(vy, angle, t, G) {
    return Math.floor(vy * Math.sin(angle) * t - 0.5 * G * Math.pow(t, 2));
}

// rotation function    
function rotate(x, y) {
    var ang = degToRad(360);
    var cos = Math.cos;
    var sin = Math.sin;
    m = 300;

    xr = (x - m) * cos(ang) - (y - m) * sin(ang) + m;
    yr = (x - m) * sin(ang) - (y - m) * cos(ang) + m;
    return [Math.floor(xr), Math.floor(yr)];
}