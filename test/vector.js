var assert = require('assert');
var Vector= require('../js/vector.js').Vector;

describe('Vector', function() {
  describe('length', function() {
    it('should calculate the right length', function() {
      assert.equal(new Vector(2, 0).length(), 2);
    });
  });
});