let myBalls = [];
let num_balls = 5;

let mySquares = [];
let num_squares = 5;

let img1;

function setup(){
    createCanvas(windowWidth, windowHeight);

    img1 = loadImage('images/pong.png');

    for(let i=0; i<num_balls; i++){
        myBalls[i] = new Ball(0, random(0, windowHeight), 40, 40, 
            color(random(0, 255), random(0,255), random(0,255)), random(2,5), random(1, 4), random(1, 4));
    }

    for(let j=0; j<num_squares; j++){
        mySquares[j] = new Square(windowWidth, random(0, windowHeight), 40, 40, 
            color(random(0, 255), random(0,255), random(0,255)), random(2,5), random(1, 4), random(-1, -4));
    }

}

function draw(){
    background(0);

    var Bsize = 20;
    for(let i=0; i<myBalls.length; i++){
        myBalls[i].display();
        myBalls[i].move();
        if(myBalls[i].rollover(mouseX, mouseY)){

            myBalls[i] = new Square(0 + Bsize, random(0 + Bsize, windowHeight- Bsize), 80, 80, 
            color(random(0, 255), random(0,255), random(0,255)), random(2,5), random(1, 4), random(1, 4));
            Bsize += 20;

        }

    }

    var Ssize = 20;
    for(let j=0; j<mySquares.length; j++){
        mySquares[j].display();
        mySquares[j].move();
        if(mySquares[j].rollover(mouseX, mouseY)){
            mySquares[j] = new Ball(0 + Ssize, random(0 + Ssize, windowHeight - Ssize), 80, 80, 
            color(random(0, 255), random(0,255), random(0,255)), random(2,5), random(1, 4), random(1, 4));
            Ssize ++;

        }

    }
    
}

class Ball{
    constructor(tempX, tempY, tempWidth, tempHeight, tempShade, tempSpeed, tempXSpeed, tempYSpeed){
        this.x = tempX;
        this.y = tempY;
        this.w = tempWidth;
        this.h = tempHeight;
        this.shade = tempShade;
        this.speed = tempSpeed;
        this.xSpeed = tempXSpeed;
        this.ySpeed = tempYSpeed;
        this.over = false;
    }

    rollover(mx, my){
        let d = dist(mx, my, this.x, this.y);
        if(d<this.w){
            this.over = true;
        }else{
            this.over = false;
        }
    }


    move(){
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
        
        if (this.x > windowWidth - this.w || this.x < this.w) {
            this.xSpeed *= -1;
        }
        
        if (this.y > windowHeight - this.h || this.y < this.h) {
            this.ySpeed *= -1;
        }


        this.x += this.speed;
        if (this.x > width || this.x < 0){
            this.speed = -1*this.speed;
        }
    }

    display(){
        if (mouseIsPressed){
            this.over = false;
            background(0);
        }
        if (this.over){
            if (myBalls.length < 15){
                let r = random(40,80);
                myBalls[myBalls.length] = new Square(random(0,windowWidth), random(0, windowHeight), r, r, 
                        color(random(255), random(255), random(255)), random(-5,5), 2, 3);



                fill(random(0,255), random(0,255), random(0,255));
                
            }
            else{
                myBalls.shift(0,190);
            }
        }


        
        ellipse(this.x, this.y, this.w, this.h);
    }




}


class Square{
    constructor(tempX, tempY, tempWidth, tempHeight, tempShade, tempSpeed, tempXSpeed, tempYSpeed){
        this.x = tempX;
        this.y = tempY;
        this.w = tempWidth;
        this.h = tempHeight;
        this.shade = tempShade;
        this.speed = tempSpeed;
        this.xSpeed = tempXSpeed;
        this.ySpeed = tempYSpeed;
        this.over = false;
    }

    rollover(mx, my){
        let d = dist(mx, my, this.x, this.y);
        if(d<this.w){
            this.over = true;
        }else{
            this.over = false;
        }
    }


    move(){
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
        
        if (this.x > windowWidth - this.w || this.x < this.w) {
            this.xSpeed *= -1;
        }
        
        if (this.y > windowHeight - this.h || this.y < this.h) {
            this.ySpeed *= -1;
        }


        this.x += this.speed;
        if (this.x > width || this.x < 0){
            this.speed = -1*this.speed;
        }
    }

    display(){
        if (mouseIsPressed){
            this.over = false;
            background(0);
        }
        if (this.over){
            if (mySquares.length < 15){
                let r = random(40,80);
                mySquares[mySquares.length] = new Ball(random(0,windowWidth), random(0, windowHeight), r, r, 
                        color(random(255), random(255), random(255)), random(-5,5), 2, 3);



                fill(255,0,0)
                
            }
            else{
                mySquares.shift(0,190);
            }
        }

        else{
            fill(this.shade);
        }
        


        rect(this.x, this.y, this.w, this.h);
    }




}