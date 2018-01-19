//$(document).ready(function () {
//    var board = [(0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0)];
  //  var color = -1;
//    var engineArr = [];

  //  function startNewGame() {
        
 //       slots();
  //      clearTop();
  //  }
//startNewGame();
  /*  function mainEngine(whosTurn, boardPositions) {
        whosTurn *= -1;
        chipBeforeFall(320, whosTurn);
        if (moveChipSideToSide(boardPositions)[0] == 1) {
            for (var i = 30; i < 462; i++) {
                slowdrop(i, track, color);
            }
        }
    }
    */
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    function blueCanvas() {
        ctx.beginPath();
        ctx.moveTo(0, 71);
        ctx.lineTo(0, 500);
        ctx.lineTo(500, 500);
        ctx.lineTo(500, 71);
        ctx.lineTo(0, 71);
        ctx.fillStyle = "#00004d";
        ctx.fill();
    }
    blueCanvas();
/*
    function slots() {
    
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 6; j++) {
                ctx.beginPath();
                ctx.arc(36 + i * 71, 107 + j * 71, 29, 0, 2 * Math.PI);
                ctx.strokeStyle = "#fff";
                ctx.fillStyle = "#fff";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
        }
    }

    function clearTop() {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 70);
        ctx.lineTo(500, 70);
        ctx.lineTo(500, 0);
        ctx.lineTo(0, 0);
        ctx.strokeStyle = "#fff";
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.stroke();
    }

    function top(x, y, r) {
        var y2 = 71;
        var startingAngle;
        var endingAngle;
        if ((Math.abs(y2 - y)) >= 29) {
            startingAngle = 0;
            endingAngle = 2 * Math.PI;
        } else {
            var changeInX = Math.sqrt((r * r) - ((y2 - y) * (y2 - y)));
            startingAngle = Math.atan((y2 - y) / (changeInX));
            endingAngle = Math.PI - startingAngle;
        }
        ctx.beginPath();
        ctx.arc(x, y, r, startingAngle, endingAngle, true);
        ctx.strokeStyle = "#0f0";
        ctx.fillStyle = "#0f0";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function slowdrop(yCoordAndTimer, x, color) {
        setTimeout(function () {
            blueCanvas();
            slots();
            clearTop();
            if (yCoordAndTimer < 100) {
                top(x, yCoordAndTimer, 29);
            }
            for (k = 0; k < 7; k++) {
                behindBlueDrop(x, k, yCoordAndTimer);
            }
        }, 10 * (yCoordAndTimer - 30));
    }

    function behindBlueDrop(x, checkAllSix, movingY) {
        if (Math.abs((36 + checkAllSix * 71) - movingY) < 59) {
            partial(x, movingY, 36 + checkAllSix * 71, 29);
        }
    }

    function partial(x, y1, y2, r) {
        var yp = (y2 + y1) / 2;
        var xp = x + (Math.sqrt((r * r) - ((y2 - y1) / 2) * ((y2 - y1) / 2)));
        var direction;
        if (xp == x) {
            return;
        }
        var startingAngle1 = Math.atan((yp - y1) / (xp - x));
        $('#one').text('track is: ' + y1);

        $('#two').text('y1 is: ' + y1);
        $('#three').text('xp is: ' + xp);
        $('#four').text('startingAngle1 is: ' + startingAngle1);
        var endingAngle1 = (Math.PI) - startingAngle1;
        var endingAngle2 = 0 - startingAngle1;
        var startingAngle2 = (Math.PI) - endingAngle2;
        if (y1 < y2) {
            direction = false;
        } else {
            direction = true;
        }
        ctx.beginPath();
        ctx.arc(x, y1, r, startingAngle1, endingAngle1, direction);
        ctx.arc(x, y2, r, startingAngle2, endingAngle2, direction);
        ctx.strokeStyle = "#0f0";
        ctx.fillStyle = "#0f0";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function chipBeforeFall(x, color) {
        ctx.beginPath();
        ctx.arc(x, 30, 29, 0, 2 * Math.PI);
        if (color) {
            ctx.strokeStyle = "#f00";
            ctx.fillStyle = "#f00";
        } else {
            ctx.strokeStyle = "#0f0";
            ctx.fillStyle = "#0f0";
        }
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function moveChipSideToSide() {
        var flag = 0;
        document.addEventListener("mousedown", function () {
            var x = event.pageX;
            var y = event.pageY;
            if (x > 291 && x < 349 && y > 0 && y < 59 && flag == 0) { //chip starts in the middle. if it is clicked, movement is triggered
                document.addEventListener("mousemove", function () {
                    var x = event.pageX;
                    if (x > 29 && x < 470 && flag == 0) {
                        clearTop();
                        chipBeforeFall(x, 1);
                    }
                });
                document.addEventListener("mouseup", function () {
                    var x = event.pageX;
                    flag = 1;
                    var track = Math.round((x - 36) / 71); //track = which column to drop the chip into
                    if (track < 0) {
                        track = 0;
                    }
                    track = 36 + (track * 71);
                    //                    var color = 0;
                    //                   for (var i=30;i<462;i++){
                    //                        slowdrop(i,track,color);
                    //                    }
                });
            }
        });
    }
    // blueCanvas();
    //    slots();
    //  chipBeforeFall(320,1);
    //    moveChipSideToSide()
    
    for (i=30;i<462;i++){
        slowdrop(i);
    }
     */
//})