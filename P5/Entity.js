function Entity(pos, target){
  this.pos = pos;
  this.target = target;
  this.dna = new DNA();
  this.mutation = 0.1;
}

Entity.prototype.show = function(){
  fill(this.dna.color);
  noStroke();
  ellipse(this.pos.x, this.pos.y, this.dna.length, this.dna.width);
}

Entity.prototype.mate = function(other){
  let np = {x: this.pos.x + this.dna.width*2, y: this.pos.y + this.dna.height*2};
  let nc = [
    lo(secant(this.dna.color[0], other.dna.color[0]), this.dna.color[0], other.dna.color[0]),
    lo(secant(this.dna.color[1], other.dna.color[1]), this.dna.color[1], other.dna.color[1]),
    lo(secant(this.dna.color[2], other.dna.color[2]), this.dna.color[2], other.dna.color[2])
  ];
  let nw = lo(secant(this.dna.width, other.dna.width), this.dna.width, other.dna.width);
  let nh = lo(secant(this.dna.height, other.dna.height), this.dna.height, other.dna.height);
  let ns = lo(secant(this.dna.speed, other.dna.speed), this.dna.speed, other.dna.speed);
  let newEntity = new Entity(np, this.target);
  newEntity.dna.mutateColor(nc);
  newEntity.dna.mutateLength(nl);
  newEntity.dna.mutateWidth(nw);
  newEntity.dna.mutateSpeed(ns);
  return newEntity;
}

function lo(t, s, e){
  return (1-t)*s + e*t;
}

function f(n){
  return round(n/255);
}

function secant(a, b){
  let top = b - a;
  let bottom = f(b) - f(a);
  let factor = f(b);
  return b - ((top/bottom)*factor);
}
