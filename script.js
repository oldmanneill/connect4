$(document).ready(function () {
    var board = [(0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0), (0, 0, 0, 0, 0, 0, 0)];
    var color = -1;
    var engineArr = [];
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    blueCanvas(0, 500, 71, 500);
    slots(0, 7, 6); //creates the white slots, 7 across, 6 down
    chipBeforeFall(320, 1);
    moveChipSideToSide()

    function blueCanvas(x1, x2, y1, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x2, y1);
        ctx.lineTo(x1, y1);
        ctx.fillStyle = "#00004d";
        ctx.fill();
    }

    function slots(columnStart, columnStop, rowStop) {
        for (var i = columnStart; i < columnStop; i++) {
            for (var j = 0; j < rowStop; j++) {
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

    function clearTop(topStart, topStop) {
        ctx.beginPath();
        ctx.moveTo(topStart, 0);
        ctx.lineTo(topStart, 70);
        ctx.lineTo(topStop, 70);
        ctx.lineTo(topStop, 0);
        ctx.lineTo(topStart, 0);
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

    function slowdrop(yCoordAndTimer, x) {
        setTimeout(function () {
            //     blueCanvas();
            var colStart = (x - 36) / 71;
            var colStop = colStart + 1;
            var roStop = 6;

            slots(colStart, colStop, roStop);
            if (yCoordAndTimer < 103) {
                var clrTopStart = x - 36;
                var clrTopStop = x + 36;
                clearTop(clrTopStart, clrTopStop);
            }

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
        $('#one').text('yp is: ' + yp);
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

    function chipBeforeFall(x) {
        ctx.beginPath();
        ctx.arc(x, 30, 29, 0, 2 * Math.PI);
        if (color - 1) {
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
        document.addEventListener("mousedown", function startMovingChip() {
            var x = event.pageX;
            var y = event.pageY;
            if (x > 291 && x < 349 && y > 0 && y < 59 && flag == 0) { //chip starts in the middle. if it is clicked, movement is triggered
                document.addEventListener("mousemove", function moveChipSideways() {
                    var x = event.pageX;
                    if (x > 29 && x < 470 && flag == 0) {
                        clearTop(0,500);
                        chipBeforeFall(x, 1);
                    }
                });
                document.addEventListener("mouseup", function mouseUp() {
                    var x = event.pageX;
                    flag = 1;
                    var track = Math.round((x - 36) / 71); //track = which column to drop the chip into
                    if (track < 0) {
                        track = 0;
                    }
                    track = 36 + (track * 71);
                    color *= -1;
                    for (var i = 30; i < 462; i++) {
                        if (flag == 1) {
                            slowdrop(i, track);
                        }
                    }
                });
            }
        });
    }

    /*
    for (i=30;i<462;i++){
        slowdrop(i);
    }
    */

})
