const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
 var groundobj1;
var plinkos=[];
var particles=[];
var division=[];


function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	bg1=new Ground(240,790,480,20)
	

	

  
  for (var i =40;i<=width; i=i+50){
   plinkos.push(new plinko(i,75,10));
  }
  
  for (var i =15;i<=width-10; i=i+50){
	plinkos.push(new plinko(i,175,10));
   }
  
   for (var i =40;i<=width; i=i+50){
	plinkos.push(new plinko(i,275,10));
   }
  
   for (var i =15;i<=width-10; i=i+50){
	plinkos.push(new plinko(i,375,10));
   }

   for (var k=0;k<=width; k=k+80){
	division.push(new divisions(k,750,5,300))
  }

    

	Engine.run(engine);


  
}


function draw() {
	background("lavender");  
	bg1.display();
   for(var i=0;i<plinkos.length;i=i+1){
	 plinkos[i].display();
   }
   for(var t=0;t<division.length;t=t+1){
	   division[t].display();
   }

   
   
  if(frameCount%60===0){
	particles.push(new particle(random(width/2-10,width/2+10),10,10))
  }
  for(var p=0;p<particles.length;p=p+1){
	particles[p].display();
  }
	drawSprites();
}






