window.onload=(function(){

    // canvas related variables
    var canvas=document.getElementById("animatedCanvas");
    var ctx=canvas.getContext("2d");
    var cw=canvas.width;
    var ch=canvas.height;

    // animation related variables
    var minX=0;        // Keep the image animating 
    var maxX=120;       // between minX & maxX
    var x=minX;         // The current X-coordinate
    var speedX=1;       // The image will move at 1px per loop 
    var direction=1;    // The image direction: 1==righward, -1==leftward
    var y=-380;           // The Y-coordinate

    // Load a new image
    // IMPORTANT!!! You must give the image time to load by using img.onload!
    var img=new Image();
    img.onload=start;
    img.src="bild.png";
    function start(){
        // the image is fully loaded sostart animating
        requestAnimationFrame(animate);
    }
    ctx.scale(0.2, 1);
    function animate(time){

        // clear the canvas
        ctx.clearRect(0,0,cw,ch);
        //ctx.scale(2, 2);
        // draw
        ctx.drawImage(img,x,y);

        // update
        x += speedX * direction;
        // keep "x" inside min & max
        if(x<minX){ x=minX; direction*=-1; }
        if(x>maxX){ x=maxX; direction*=-1; }

        // request another loop of animation
        requestAnimationFrame(animate);
    }

}); // end $(function(){});
