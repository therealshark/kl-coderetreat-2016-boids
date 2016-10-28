'use strict';

var Renderer = (function(){
  var ctx;

  function initialize(){
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
  }

  function render(boids){

  }

  return {
    initialize: initialize,
    render: render
  };
})();

if(typeof exports !== typeof undefined){
  exports.Renderer = Renderer;
}