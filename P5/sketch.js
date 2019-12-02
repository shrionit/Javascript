let entities = [];
function setup(){
  createCanvas(700, 700);
  for(let i=0;i<100;i++){
    entities.push(new Entity({x: random(width), y: random(width)}, 1));
  }
}

function draw(){
  background(100);
  for(let e of entities){
    e.show();
  }
}
