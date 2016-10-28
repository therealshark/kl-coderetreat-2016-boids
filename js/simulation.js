'use strict';

var Simulation = (function(){
  var running = false;
  var boids = [];

  function tick() {
    boids.forEach(boid => boid.tick(boids));
    Renderer.render(boids);
    if(running){
      window.requestAnimationFrame(tick);
    }
  }

  function run() {
    if(!running){
      running = true;
      tick();
    }
  }

  function pause() {

  }

  function initialize() {
    // Creating some boids
    for(var i = 0; i < 10; i++){
      boids.push(new Boid());
    }
    Renderer.initialize();
    run();
  }

  return {
    initialize: initialize,
    run: run
  };
})();

if(typeof exports !== typeof undefined){
  exports.Simulation = Simulation;
}