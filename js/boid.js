'use strict';

var Boid = (function(){
  function Boid(simulation, position, speed){
    this.simulation = simulation;
    this.position = position || new Vector(0, 0);
    this.speed = speed || new Vector(Math.random() * 2 -1, Math.random() * 2 -1);
  }

  Boid.prototype.tick = function(boids) {
    var influencers = this.getInfluencers(boids);
    // calculate influences

    this.position += this.speed;
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