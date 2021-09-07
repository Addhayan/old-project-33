class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
       this.body =  (x , y , width , height , options);
        this.image = loadImage("images/snow4.webp");
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
       

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        image(this.image,random(10,1200),10,50,50);
        pop();
    }

};