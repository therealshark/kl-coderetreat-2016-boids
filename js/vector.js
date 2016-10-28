'use strict';

var Vector = (function(){
  function Vector(x, y){
    this.x = x;
    this.y = y;
  }

  Vector.prototype.set = function(x, y) {
    this.x = x;
    this.y = y;

    return this;
  };

  Vector.prototype.add = function(other, result) {
    return (result || new Vector()).set(
      this.x + other.x,
      this.y + other.y
    );
  };

  Vector.prototype.multiplyScalar = function(scalar, result) {
    return (result || new Vector()).set(
      this.x * scalar,
      this.y * scalar
    );
  };

  Vector.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  Vector.prototype.dotProduct = function(other) {
    return this.x * other.x + this.y * other.y;
  };

  Vector.prototype.angle = function() {
    var angle = Math.atan2(this.y, this.x);   //radians
    angle = (angle > 0 ? angle : (2*Math.PI + angle)) * 360 / (2*Math.PI);
  };

  Vector.prototype.angleBetween = function(other) {
    var deltaY = other.y - this.y;
    var deltaX = other.x - this.x;
    return Math.atan2(deltaY, deltaX) * (Math.PI/180);
  };

  Vector.prototype.normalize = function(result) {
    var scalar = 1 / this.length();
    return this.multiplyScalar(scalar, result);
  };

  Vector.prototype.toString = function(){
    return "Vector(" + this.x + ", " + this.y + ")";
  };

  Vector.prototype.clone = function() {
    return new Vector(this.x, this.y);
  };

  return Vector;
})();

if(typeof exports !== typeof undefined){
  exports.Vector = Vector;
}