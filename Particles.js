class Particles {
    constructor(x,y,r){
    var options ={
        isStatic : false,
        restitution : 1,
        friction : 0
    }
    this.x = x;
    this.y = y;
    this.r = 10;
    this.body = Bodies.circle(x,y,this.r,options);
    this.color = color(random(0,255) , random (0,255) , random(0,255))
    
    World.add(world,this.body);
    }
    display(){
        var particlesPos = this.body.position
        push();
        translate(this.body.x,this.body.y)
        ellipseMode(CENTER)
        ellipse(particlesPos.x,particlesPos.y,10,10);
        pop();
    }
}