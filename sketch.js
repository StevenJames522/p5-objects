function setup(){
    createCanvas(600,400);
    background(0);
    steve = new Pacman(300,200);
    
    
}

function draw(){
    background(0);
    steve.move();
    steve.display();
    steve.boundary();
}

function Pacman(customX, customY){
    this.x = customX;
    this.radB = 30;
    this.radT = 305;
    this.rotation = 0;
    this.y = customY;
    this.display = function(){ 
        fill(255,255,0);  
        //ellipse(this.x,this.y,40,40);
        arc(this.x, this.y, 40,40, radians(this.radB + this.rotation), radians(this.radT + this.rotation), PIE);
        
    };
    
    this.move = function(){
        if(keyIsDown(UP_ARROW)){
            this.y -= 5;
            this.rotation = 270;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y += 5;
            this.rotation = 90;
        }    
        if(keyIsDown(RIGHT_ARROW)){
            this.x += 5;
            this.rotation = 0;
    }
        if(keyIsDown(LEFT_ARROW)){
            this.x -= 5;
            this.rotation = 180;
        }
    this.boundary = function(){
        if(this.x > width){
            this.x = 0;
        }
        if(this.x < 0){
           this.x = width;
        }
        if(this.y > height){
            this.y = 0;
        }
        if(this.y > height){
            
            this.y = 0;
        }    
        if(this.y < 0){
            this.y = height;
        }
            
        }
        
    }

        
        
    }



