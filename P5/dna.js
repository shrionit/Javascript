function DNA(){
  this.color = [255, 0, 0];
  this.length = 5;
  this.width = 5;
  this.speed = 0.1;
}

DNA.prototype.mutateColor = function(nc){
  this.color = nc;
}

DNA.prototype.mutateLength = function(nl){
  this.length = nl;
}

DNA.prototype.mutateWidth = function(nw){
  this.width = nw;
}

DNA.prototype.mutateSpeed = function(ns){
  this.speed = ns;
}
