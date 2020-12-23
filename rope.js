class Rope {
    constructor (body1,body2,offsetX,offsetY){
       this.offsetX=offsetX
       this.offsetY=offsetY
       var options={
           bodyA:body1,
           bodyB:body2,
           pointB:{x:this.offsetX,y:this.offsetY}
       }
       this.rope=constraint.create(options);
       World.add(world,this.rope)
    }
    display(){
        var bodyA=this.rope.body1.position
        var bodyB=this.rope.body2.position
        strokeWeight(4);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
    }
 }