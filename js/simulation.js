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
    for(var i = 0; i < 18; i++){
      var angle = (Math.PI / 9) * i;
      boids.push(new Boid(new Vector(400, 300), new Vector(Math.sin(angle) * 0.1, -Math.cos(angle) * 0.1)));
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