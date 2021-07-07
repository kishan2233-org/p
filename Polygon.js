class Polygon
{
	constructor(x,y)
	{
		var options={
			isStatic:false,	
		    restitution:1,
			friction:0,
			density:7.8
    }

	      this.image = loadImage("polygon.png")
			this.body = Bodies.circle(x, y, 5, options);
		World.add(world, this.body)
	
	}
	
	display()
	{
		push();
		ellipseMode(RADIUS);
			fill("pink");
            ellipse(this.body.position.x, this.body.position.y, 5, 5);
			imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, 60, 60);
			pop();
 }
}