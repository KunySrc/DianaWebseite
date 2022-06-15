var canvas = document.getElementById("animatedCanvas");
var ctx=canvas.getContext("2d");
//ctx.font="30px Comic Sans MS";
//ctx.fillStyle = "red";
//ctx.textAlign = "center";
//ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
//ctx.drawImage("animatedCanvasImg.jpeg", 0, 0, 0, 0);


var img1 = new Image();

        //drawing of the test image - img1
        img1.onload = function () {
            //draw background image
            ctx.drawImage(img1, 0, 0);
            //draw a box over the top
            ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
            ctx.fillRect(0, 0, 500, 500);

        };

        img1.src = 'animatedCanvasImg.jpeg';