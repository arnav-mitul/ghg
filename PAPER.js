class PA{
    constructor(x,y,width){
    var io={
        'isStatic':true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }

this.body=Bodies.circle(x,y,width,io);
this.width=width;


World.add(world,this.body);
}

display(){
    var pos=this.body.position;
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x,pos.y,this.width,20);
    if(keyDown(UP_ARROW)){
        this.body.position.x=600; 
        this.body.position.y=550;
        Matter.Body.setStatic(this.body,false);
        }

}
}