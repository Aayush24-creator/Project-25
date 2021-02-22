class Ball {

    constructor(x,y,radius) {

        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y
       // this.balls=Bodies.circle(x,y,radius,options);
        this.paper=loadImage("paper1.png");
        this.radius = radius;
        //World.add(world,this.body);
    }

    display() {
        circle(this.body.position.x,this.body.position.y,this.radius);
        image(this.paper,this.body.position.x,this.body.position.y,70);
        }
}