class Box {
    constructor(x,y,width,height){
    var optons={
        restitution:0.8
    }
    this.body=Bodies.rectangle(100,649,width,height);
World.add(world,this.body)
}

display(){
    var pos= this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.innerWidth,this.height)
}
}