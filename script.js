$(document).ready(function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    function blueCanvas () {
    ctx.beginPath();
    ctx.moveTo(0, 71);
    ctx.lineTo(0, 500);
    ctx.lineTo(500, 500);
    ctx.lineTo(500, 71);
    ctx.lineTo(0, 71);
    ctx.fillStyle = "#00004d";
    ctx.fill();
}
   // ctx.stroke();
    function slots () {
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 6; j++) {
                ctx.beginPath();
                ctx.arc(36 + i * 71, 107 + j * 71, 29, 0, 2 * Math.PI);
                ctx.fillStyle = "#fff";
                ctx.fill();
                ctx.stroke();
            }
        }
    }

   function slowdrop(yCoordAndTimer){
        setTimeout(function(){
            blueCanvas();
            slots();
            for (k=0; k<6;k++){
                behindBlueDrop(k,yCoordAndTimer);
            }
        },.3*(yCoordAndTimer));
    }
    function behindBlueDrop (checkAllSix,movingY){
        if (Math.abs((36+checkAllSix*71)-movingY)<59){
            partial(107,71+movingY,107+checkAllSix*71,29);
        }
    }
    function partial (x,y1,y2,r){

        var yp = (y2+y1)/2;
        var xp = x+(Math.sqrt((r*r)-((y2-y1)/2)*((y2-y1)/2)));
        var direction;
        var startingAngle1 = Math.atan((yp-y1)/(xp-x));
        $('#one').text('yp is: '+yp);
        $('#two').text('y1 is: '+y1);
        $('#three').text('xp is: '+xp);
        $('#four').text('startingAngle1 is: '+startingAngle1);
        var endingAngle1 = (Math.PI)-startingAngle1;
        var endingAngle2 = 0 - startingAngle1;
        var startingAngle2 = (Math.PI)-endingAngle2;
        if (y1<y2){
            direction = false;
        }else{
            direction = true;
        }
        ctx.beginPath();
        ctx.arc(x, y1, r, startingAngle1, endingAngle1,direction);
        ctx.arc(x,y2,r,startingAngle2, endingAngle2, direction);
        ctx.fillStyle = "#0f0";
        ctx.fill();
        ctx.stroke();
    }
    for (i=0;i<391;i++){
        slowdrop(i);
    }

})