'use strict';

var Simulation = (function(){
  var running = false;
  var boids = [];

  function tick() {
    boids.forEach(boid => boid.tick(boids));
    if(running){
      window.requestAnimationFrame(tick);
    }
  }

  function run() {
    if(!running){
      running = true;
      tick();
      Renderer.render(boids);
    }
  }

  function pause() {

  }

  function initialize() {
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