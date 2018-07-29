// define the constants required
const G = 9.81;
velocity = document.getElementById("vel").value;

// function to change degree to rad
function degToRad(angle) {
    // console.log('Angle in rad ' + (angle * Math.PI / 180));
    return angle * Math.PI / 180;
}

// function to calculate time of flight
function getFlightTime(velocity, angle) {
    // console.log('Flight Time ' + (2 * velocity * Math.sin(angle) / G));
    return 2 * velocity * Math.sin(angle) / G;
}

// function to calculate the max distance
function getMaxDistance(velocity, angle) {
    // console.log('Max Distance ' + (Math.pow(velocity, 2) / G * Math.sin(angle * 2)));
    return (Math.pow(velocity, 2) * 2 * Math.sin(angle) * Math.cos(angle)) / G;
}

// function to calculate the max height
function getMaxHeight(velocity, angle) {
    // console.log('Max height ' + (Math.pow(velocity, 2) * Math.pow(Math.sin(angle), 2) / (2 * G)));
    return Math.pow(velocity, 2) * Math.pow(Math.sin(angle), 2) / (2 * G);
}


// Main function
function init() {
    // For Canvas
    var theCanvas = document.getElementById("theCanvas");
    var theContext = theCanvas.getContext("2d");

    const G = 9.81;
    var velocity = document.getElementById("vel").value;
    var angle = degToRad(document.getElementById("angle").value);

    const TIME = getFlightTime(velocity, angle);
    RANGE = getMaxDistance(velocity, angle);
    const HEIGHT = getMaxHeight(velocity, angle);

    console.log('Max Range ' + RANGE);
    console.log('Max Height ' + HEIGHT);
    console.log('TIme ' + TIME);
    console.log(rotate(1, 2));
    console.log('--------------------------------------------');

    var xCord = 0;
    var yCord = 0;
    var initTime = 0.01;
    var vx = velocity;
    normYCord = 0;

    while (normYCord >= 0) {
        // rotate the coordinates
        var coor = rotate(normXCord, normYCord);
        theContext.moveTo(coor[0], coor[1]);
        var vy = velocity * angle - G * initTime;
        console.log('Time ' + initTime + ' Vx= ' + vx + ' Vy= ' + vy);
        xCord = calculateX(vx, angle, initTime);
        yCord = calculateY(vy, angle, initTime, G);
        var normXCord = Math.floor(pixNorm(xCord));
        var normYCord = Math.floor(pixNorm(yCord));
        console.log('X-Coordinate ' + xCord + ' Y-Coordinate ' + yCord);
        console.log('++++++++++++ NORMALIZED PIXELS +++++++++++++++++++');
        console.log(normXCord + ' ' + normYCord);
        console.log('----------------------------------------------------');

        // For Canvas
        var coor = rotate(normXCord, normYCord);
        theContext.lineTo(coor[0], coor[1]);
        theContext.stroke();
        initTime += 0.01;
    }
}

// Function to calulate coordinates
function calculateX(vx, angle, t) {
    return vx * Math.cos(angle) * t;
};

function calculateY(vy, angle, t, G) {
    // return vy * t - 0.5 * G * Math.pow(t, 2);
    return vy * Math.sin(angle) * t - 0.5 * G * Math.pow(t, 2);
}

// function to convert meter to pixel
function meterToPix(m) {
    return m * 3779.52;
}

// Pixel Normalisation Function
function pixNorm(pix) {
    const SCREENPIX = 1300;
    var pixl = meterToPix(RANGE);
    return (SCREENPIX / RANGE) * pix;
}

// Rotation Function
function rotate(x, y) {
    var ang = degToRad(360);
    var cos = Math.cos;
    var sin = Math.sin;
    m = 300;

    xr = (x - m) * cos(ang) - (y - m) * sin(ang) + m;
    yr = (x - m) * sin(ang) - (y - m) * cos(ang) + m;
    return [Math.floor(xr), Math.floor(yr)];

    // return [Math.floor(x), Math.floor(y)];
}