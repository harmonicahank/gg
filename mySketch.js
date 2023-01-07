//Made for the #wccChallenge on the theme of "Dada".

//A generative photmontage as a tribute to my personal favorite Dadaist- Hannah Höch. HH was one of the first artists to view
//and use photomontage as a serious art form. 
//Only reluctantly accepted by her fellow Dada artists (who gave lip service to women's liberation, but 
//still expected her to make the sandwiches) and not given her full due in her time, Höch's work is pioneering in any number of ways.
//MOMA, NY has a full PDF of the best monograph of her work (I proudly have it in print on my shelf) online at:
//    https://www.moma.org/documents/moma_catalogue_241_300063171.pdf

//pages 37, 51 and 112 are my personal favorites

//Oh, the eyes are mine. The stop-motion scissors also. The 'Dada' is from a contemporary source. All of other pictures are of HH.


let colors=['#d1c7c8','#ead7d7','#e9d4c3','#d9f6fc','#dfe0e2']
let eye
let scissors=[]
let scissorCount=0
let scissorTint

function preload() {

  hh1 = loadImage('HH.jpeg');
	hh2 = loadImage('hh2.jpeg');
	hh3= loadImage('hh3.jpeg');
	hh4= loadImage('hh4.jpg');
	hh5= loadImage('hh5.jpg');
	eyePic= loadImage('eye.jpg');
	dada= loadImage('dada.jpg');
	s1= loadImage('s1.jpg');
	s2= loadImage('s2.jpg');
	s3= loadImage('s3.jpg');
	s4= loadImage('s4.jpg');
	s5= loadImage('s5.jpg');
	s6= loadImage('s6.jpg');
	s7= loadImage('s7.jpg');
	s8= loadImage('s8.jpg');
	scissors.push(s1, s2, s3, s4, s5, s6, s7, s8, s7, s6, s5, s4, s3, s2)
}


function setup() {
	createCanvas(windowHeight*1.5, windowHeight);
	background(0);
	eye= createGraphics(640, 573)
	eye.image(eyePic, 0, 0)
	eye.erase()
	eye.beginShape()
	eye.vertex(0, 0)
	eye.vertex(eye.width, 0)
	eye.vertex(eye.width, eye.height)
	eye.vertex(0, eye.height)
	eye.beginContour()
	for(let i=TAU; i>0; i-=0.1){
		x=eye.width/2+cos(i)*300
		y=eye.height/2+sin(i)*175
		vertex(x, y)
	}
	eye.endContour()
	eye.endShape(CLOSE)
	eye.noErase()
	scissorTint=random(colors)
	//imageMode(CENTER)
}

function draw() {

	
	if(frameCount<800){
	
	if(frameCount%10==0){
	let dx= random(hh1.width-20)
	let dy= random(hh1.height-20)
	let dWidth= random(20, hh1.width-dx)
	let dHeight= random(20, hh1.height-dy)
	let newX= map(dx, 0, hh1.width, -width*0.25, width)
	let newY=map(dy, 0, hh1.height,    0, height)
	let newScale= random(0.75, 1)
	let c= color((random(colors)))
		tint(c)
	image(hh1,newX, newY, dWidth*newScale, dHeight*newScale, dx, dy, dWidth, dHeight)
	}
	if(frameCount%10==2){
	let dx= random(hh2.width-20)
	let dy= random(hh2.height-20)
	let dWidth= random(20, hh2.width-dx)
	let dHeight= random(20, hh2.height-dy)
	let newX= map(dx, 0, hh2.width, width*0.5, width)
	let newY=map(dy, 0, hh2.height,  0, height)
	let newScale= random(0.75, 1.25)
	image(hh2,newX, newY, dWidth*newScale, dHeight*newScale, dx, dy, dWidth, dHeight)
	}
	
	if(frameCount%10==4){
	let dx= random(hh3.width-20)
	let dy= random(hh3.height-20)
	let dWidth= random(20, hh3.width-dx)
	let dHeight= random(20, hh3.height-dy)
		let newX= map(dx, 0, hh3.width,  -width*0.25, width)
	let newY=map(dy, 0, hh3.height,   0, height)
	let newScale= random(0.75, 1.25)
	let c= color((random(colors)))
		tint(c)
		push()
		rotate(random(-PI/10, PI/10))
	image(hh3,newX, newY, dWidth*newScale, dHeight*newScale, dx, dy, dWidth, dHeight)
		pop()
	}
	
		
	if(frameCount%10==6){
	let dx= random(hh4.width-20)
	let dy= random(hh4.height-20)
	let dWidth= random(20, hh4.width-dx)
	let dHeight= random(20, hh4.height-dy)
		let newX= map(dx, 0, hh4.width, -width*0.25, width*0.75)
	let newY=map(dy, 0, hh4.height, 0, height)
	let newScale= random(0.5, 0.75)
	let c= color((random(colors)))
		tint(c)
		push()
		rotate(random(-PI/12, PI/12))
	image(hh4,newX, newY, dWidth*newScale, dHeight*newScale, dx, dy, dWidth, dHeight)
		pop()
	}
		
		
		if(frameCount%10==8){
	let dx= random(hh5.width-20)
	let dy= random(hh5.height-20)
	let dWidth= random(20, hh5.width-dx)
	let dHeight= random(20, hh5.height-dy)
		let newX= map(dx, 0, hh5.width, width*0.5, width)
	let newY=map(dy, 0, hh5.height, 0, height)
	let newScale= random(0.75, 1.25)
  push()
	let c= color((random(colors)))
		tint(c)
	image(hh5, newX, newY, dWidth*newScale, dHeight*newScale, dx, dy, dWidth, dHeight)
	pop()
	}
		
		
		push()
		translate(165, height-125)
	scale(0.5)
		rotate(PI/2)
		tint(scissorTint)
		image(scissors[scissorCount%14],0, 0)
		if(frameCount%2==0){
			scissorCount++
		}
		pop()		
	
	}
	
	if(frameCount>800 && frameCount<925){
		if(frameCount%2==0){
			push()
		imageMode(CENTER)
   translate(random(width*0.75, width), random(height))
			rotate(random(-PI/4, PI/4))
		scale(random(0.05, 0.2))
		let c= color((random(colors)))
		tint(c)
image(eye, 0, 0)
			pop()
	}
	}
	if(frameCount==930){
		push()
		imageMode(CORNER)
		image(dada, 0, 0)
		pop()
	}
}