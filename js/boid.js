'use strict';

var Boid = (function(){
  function Boid(position, speed){
    this.position = position || new Vector(400, 300);
    this.speed = speed || new Vector(Math.random() * 2 -1, Math.random() * 2 -1);
  }

  Boid.prototype.tick = function(boids) {
    var influencers = this.getInfluencers(boids);
    // calculate influences

    this.position.add(this.speed, this.position);
  };

  Boid.prototype.updateDirection = function() {

  };

  Boid.prototype.getInfluencers = function(boids) {
    return boids.filter(boid => this != boid);
  };

  Boid.prototype.calculateSeperation = function(influencers){

  };

  Boid.prototype.calculateCohesion = function(influencers) {

  };

  Boid.prototype.calculateAdaption = function(influencers) {

  };

  return Boid;
})();

if(typeof exports !== typeof undefined){
  exports.Boid = Boid;
}