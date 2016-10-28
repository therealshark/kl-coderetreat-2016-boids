'use strict';

var Renderer = (function(){
  var ctx,
    canvas;

  function initialize(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
  }

  function render(boids){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    boids.forEach(boid => {
      ctx.fillStyle = "black";
      ctx.fillRect(boid.position.x, boid.position.y, 10, 10);
    });
  }

  return {
    initialize: initialize,
    render: render
  };
})();

if(typeof exports !== typeof undefined){
  exports.Renderer = Renderer;
}