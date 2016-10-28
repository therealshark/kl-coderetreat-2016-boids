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
      (this.position.x + 800) % 800,
      (this.position.y +  600) % 600
    );
  };

  Boid.prototype.updateSpeed = function(influencers) {
    //console.log(this.calculateSeperation(influencers));
    var speed = this.speed
      .add(
        this.calculateSeperation(influencers)
          .multiplyScalar(0.05)
      )
      .add(
        this.calculateCohesion(influencers)
          .multiplyScalar(0.005)
      );
    if(speed.length() > 3/2){
      speed = speed
        .normalize(speed)
        .multiplyScalar(3/2, speed);
    }
    return speed;
  };

  Boid.prototype.getInfluencers = function(boids) {
    return boids.filter(boid => this != boid && boid.position.distance(this.position) < 250);
  };

  Boid.prototype.calculateSeperation = function(influencers){
    return influencers
      .filter(influencer => influencer.position.distance(this.position) <= 15)
      .map(influencer => this.position.subtract(influencer.position).multiplyScalar(0.3))
      .reduce((curr, before) => curr.add(before), new Vector(0, 0));
  };

  Boid.prototype.calculateCohesion = function(influencers) {
    var amount = influencers.length;
    var center =  influencers.map(boid => boid.position).reduce((curr, old) => {
      return curr.add(old);
    }, new Vector(0, 0)).multiplyScalar(1/amount);
    return center.subtract(this.position).multiplyScalar(0.1);
  };

  Boid.prototype.calculateAdaption = function(influencers) {

  };

  return Boid;
})();

if(typeof exports !== typeof undefined){
  exports.Boid = Boid;
}