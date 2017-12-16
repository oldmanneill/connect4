$(document).ready(function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    function blueCanvas () {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 429);
    ctx.lineTo(500, 429);
    ctx.lineTo(500, 0);
    ctx.lineTo(0, 0);
    ctx.fillStyle = "#00004d";
    ctx.fill();
}
   // ctx.stroke();
    function slots () {
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 6; j++) {
                ctx.beginPath();
                ctx.arc(36 + i * 71, 36 + j * 71, 29, 0, 2 * Math.PI);
                ctx.fillStyle = "#ccc";
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
        },135*(yCoordAndTimer));
    }
    function behindBlueDrop (checkAllSix,movingY){
        if (Math.abs((36+checkAllSix*71)-movingY)<58){
            partial(107,movingY,107,36+checkAllSix*71,29);
            //   partial(107,85,107,107,29);
            //  $('p').text(Math.abs((36+checkAllSix*71)-movingY));
        }
    }
    function partial (x1,y1,x2,y2,r){

        var yp = (y2+y1)/2;
        var xp = x1+(Math.sqrt((r*r)-((y2-y1)/2)^2));
        var direction;
        var startingAngle1 = Math.atan((yp-y1)/(xp-x1));
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
        ctx.arc(x1, y1, r, startingAngle1, endingAngle1,direction);
        ctx.arc(x2,y2,r,startingAngle2, endingAngle2, direction);
        ctx.fillStyle = "#0f0";
        ctx.fill();
        ctx.stroke();
    }
    for (i=0;i<391;i++){
        slowdrop(i);
    }

   // partial(107,79,107,107,29);
})