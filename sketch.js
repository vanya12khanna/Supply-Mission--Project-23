var helicopterIMG, helicopterSprite
var packageSprite,packageIMG;
var packageBody,ground;
var beachBackgroundImg, beachBgSprite;
var childrenImg, childrenSprite;
var childImg, childSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
    beachBackgroundImg=loadImage("beachBackground.png")
    childrenImg=loadImage("children.png")
    childImg=loadImage("child.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
  	beachBgSprite = createSprite(400,350);
	beachBgSprite.addImage(beachBackgroundImg);
  
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;
  
  	childrenSprite = createSprite(18, 580, 10,10);
	childrenSprite.addImage(childrenImg)
	childrenSprite.scale = 0.3;
  
    childSprite = createSprite(620, 600, 10,10);
	childSprite.addImage(childImg)
	childSprite.scale = 0.07;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  	packageSprite.x = helicopterSprite.x;

  if (keyDown("LEFT_ARROW")){
	  helicopterSprite.x -= 0.5;
  }

  if (keyDown("RIGHT_ARROW")){
	helicopterSprite.x += 0.5;
}

	if (keyDown("DOWN_ARROW")){
		Matter.Body.setStatic(packageBody, false);
	}


  
  drawSprites();
  
  
 
}
