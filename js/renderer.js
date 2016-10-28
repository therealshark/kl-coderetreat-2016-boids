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
      ctx.strokeStyle = "red";
      ctx.fillRect(boid.position.x - 2, boid.position.y - 2, 4, 4);
      ctx.beginPath();
      ctx.moveTo(boid.position.x, boid.position.y);
      var direction = boid.position.add(boid.speed.normalize().multiplyScalar(20));
      ctx.lineTo(direction.x, direction.y);
      ctx.stroke();
      var angle = boid.speed.angle();
      ctx.strokeStyle = "blue";
      ctx.beginPath();
      ctx.moveTo(boid.position.x, boid.position.y);
      ctx.lineTo(boid.position.x + Math.sin(angle) * 20, boid.position.y - Math.cos(angle) + 20);
      ctx.stroke();
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