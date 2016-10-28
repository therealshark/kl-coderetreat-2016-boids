'use strict';

var Boid = (function(){
  function Boid(position, speed){
    this.position = position || new Vector(400 + Math.random() * 10 - 5, 300 + Math.random() * 10 - 5);
    this.speed = speed || new Vector(Math.random()  -0.5, Math.random() -0.5);
  }

  Boid.prototype.tick = function(boids) {
    var influencers = this.getInfluencers(boids);
    this.speed = this.updateSpeed(influencers);

    this.position.add(this.speed, this.position);
    this.position.set(
      this.position.x % 800,
      this.position.y % 600
    );
  };

  Boid.prototype.updateSpeed = function(influencers) {
    //console.log(this.calculateSeperation(influencers));
    var speed = this.speed.add(this.calculateSeperation(influencers).multiplyScalar(0.005));
    if(speed.length() > 3/2){
      speed = speed.normalize(speed).multiplyScalar(3/2, speed);
    }
    return speed;
  };

  Boid.prototype.getInfluencers = function(boids) {
    return boids.filter(boid => this != boid);
  };

  Boid.prototype.calculateSeperation = function(influencers){
    return influencers
      .filter(influencer => influencer.position.distance(this.position) <= 30)
      .map(influencer => this.position.subtract(influencer.position).multiplyScalar(0.2))
      .reduce((curr, before) => curr.add(before), new Vector(0, 0));
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