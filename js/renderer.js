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
    
  };
})();

if(typeof exports !== typeof undefined){
  exports.Renderer = Renderer;
}