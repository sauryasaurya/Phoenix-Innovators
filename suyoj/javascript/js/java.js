function projectile() {
    var velocity, angle;

    const gravity = 9.8;

    // Taking the value from the user input

    angle = Number(document.getElementById('angle').value);
    velocity = Number(document.getElementById('velocity').value);

    //Converting the angle into degree
    new_angle = radToDeg(angle);

    var ranger = range(velocity);
    var meter = rangeToPixel(ranger);


    console.log(new_angle);

    console.log(("This is range :" + range(velocity)));

    console.log("--------------------------------------------")
    console.log(("Thhis is height :" + height(velocity)));

    console.log("--------------------------------------------")

    console.log(("This is time :" + times(velocity)));
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.translate(0,150);
    var looped = times(velocity);
    var Timee = 0;
    while (Timee < looped) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.moveTo(z, -x);

        velocity_y = ((velocity) - gravity * Timee); //Time
        var z = newXcordinate(velocity, Timee);

        console.log("New Co-ordinate X :" + z);
        var x = newYcordinate(velocity_y, Timee); //Time
        console.log("New Co-ordinate Y :" + x);
        var norm = normalization(meter, z);
        console.log("The normalized form is :" + norm);
        ctx.lineTo(z, -x);
        ctx.stroke();
        Timee++;


    }

}


function range(velocity) {
    var gravity = 9.8;
    console.log("New Angle inside Range :" + new_angle);
    return ((Math.pow(velocity, 2) * sine2theta(new_angle) / gravity));

}

function height(velocity) {
    var gravity = 9.8;
    return ((Math.pow(velocity, 2) * sineSquare(new_angle)));

}

function times(velocity) {
    var gravity = 9.8;
    return ((2 * velocity * Math.sin(new_angle)) / gravity);

}

function radToDeg(angle) {
    console.log("This is converted angle" + (angle * (180 / Math.PI)));
    return (angle * (180 / Math.PI));
}

function sine2theta(new_angle) {
    console.log("Sine2Theta value :" + Math.sin(2 * new_angle));
    return (Math.sin(2 * new_angle));
}

function sineSquare(new_angle) {
    return ((Math.sin(new_angle) * (Math.sin(new_angle))));
}

function newXcordinate(velocity, time) {
    return (velocity * time);
}

function newYcordinate(velocity_y, time) {
    var gravity = 9.8;
    return (velocity_y * time - 0.5 * gravity * Math.pow(time, 2));
}

function rangeToPixel(range) {
    return (range * 3779.52);

}

function normalization(meter, cordinate) {
    return ((400 / meter) * cordinate);
}