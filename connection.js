class Connection{
    constructor(a,b) {
      var features ={
          bodyA:a,
          bodyB : b,
          stiffness: 0.04,
          length :10
       }  
       this.body=Constraint.create (features)
       this.sling1=loadImage ("sprites/sling1.png")
       this.sling2=loadImage ("sprites/sling2.png")
       this.sling3=loadImage ("sprites/sling3.png")
       World.add (world,this.body)
      }
      display(){
          image (this.sling1,180,60)
          
      var a=this.body.bodyA.position
      var b=this.body.bodyB.position
      line (a.x,a.y,b.x,b.y)
      }
}