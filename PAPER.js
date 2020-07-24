class PA{
    constructor(x,y,width){
    var io={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
this.y=y;
this.x=x;
this.width=width;
this.body=Bodies.circle(x,y,width,io);

World.add(world,this.body);
}

display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y)
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x,pos.y,this.width,20);
    pop();
}
}