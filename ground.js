class Ground {

    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.grounds = Bodies.rectangle(x,y,width,height,options);

        this.width = width
        this.height = height

    //    World.add(world,this.body)

    }

    display(colour) {

        var pos = this.body.position;

        rectMode(CENTER)
        fill("black")
        rect(pos.x,pos.y,this.width,this.height);

        fill(colour)
        rect(pos.x,pos.y-15,this.width,this.height)
    }
}