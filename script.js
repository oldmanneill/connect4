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
    blueCanvas();
    slots();

 /*   function slowdrop(yCoordAndTimer){
        setTimeout(function(){
            blueCanvas();
            slots();
            ctx.beginPath();
            ctx.arc(391,yCoordAndTimer,29,0,2*Math.PI);
            ctx.fillStyle="red";
            ctx.fill();
            ctx.stroke();

            },5*(yCoordAndTimer+36));

    }
    for (i=-36;i<391;i++){
        slowdrop(i);
    }
    */
 function partial (x1,y1,x2,y2,r){
     var yp = (y2+y1)/2;
     var xp = x1+Math.sqrt((r*r)-((y2-y1)*(y2-y1)));
     var direction;
     var startingAngle1 = Math.atan((yp-y1)/(xp-x1));
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
partial(107,85,107,107,29);

})