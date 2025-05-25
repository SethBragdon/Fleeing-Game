let canvas = document.getElementById('canvas');
canvas.height = window.innerHeight-20;
canvas.width = window.innerWidth-20;

let brush = canvas.getContext('2d');
brush.fillStyle = '#2b8963';
brush.fillRect(0, 0, canvas.width, canvas.height);

// SPRITE class
class sprite {
    constructor(height, width, color, xPos, yPos, xSpeed, ySpeed, image = null){
        this.height = height;
        this.width = width;
        this.color = color;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.image = image;
        
        // Handle image processing
        if(this.image != null){
            this.image = document.createElement('img');
            this.image.width = this.width;
            this.image.height = this.height;
            this.image.src = image;
        }
    }
    
    draw(){
        brush.fillStyle = this.color;
        if(this.image == null){
            brush.fillRect(this.xPos, this.yPos, this.width, this.height);
        } else {
            brush.drawImage(this.image, this.xPos, this.yPos, this.width, this.height);
        }
    }
    
    update(){
        this.draw();
        this.xPos += this.xSpeed;
        this.yPos = this.yPos + this.ySpeed;
    }
}