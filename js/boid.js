var Boid = (function(){
  function Boid(simulation, position, speed){
    this.simulation = simulation;
    this.position = position || new Vector(0, 0);
    this.speed = speed || new Vector(0, 0);
  }

  Boid.prototype.tick = function() {
    // calculate influences

    this.position += this.speed;
  };

  Boid.prototype.updateDirection = function() {

  };

  Boid.prototype.getInfluencers = function() {

  };

  Boid.prototype.calculateSeperation = function(influencers){

  };

  Boid.prototype.calculateCohesion = function(influencers) {

  };

  Boid.prototype.calculateAdaption = function(influencers) {

  };

  return Boid;
})();

exports.Boid = Boid;