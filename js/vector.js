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

  Vector.prototype.normalize = function(result) {
    var scalar = 1 / this.length();
    return (result || new Vector()).multiplyScalar(scalar);
  };

  Vector.prototype.dotProduct = function(other) {
    return this.x * other.x + this.y * other.y;
  };

  Vector.prototype.angle = function(other) {
    return Math.acos(this.dotProduct(other) / (this.length() * other.length()));
  };

  return Vector;
})();
