var assert = require('assert');
var Vector= require('../js/vector.js').Vector;

describe('Vector', function() {
    describe('set()', function() {
        it('should set the right vector', function() {
            assert.equal(new Vector(3, 3).toString(), (new Vector(2, 1).set(3, 3).toString()));
        });
    });

    describe('add()', function() {
        it('should add 2 Vectors, creating new Vectors', function() {
            assert.equal(new Vector(3, 3).toString(), (new Vector(2, 1).add(new Vector(1, 2)).toString()));
        });
        it('should add 2 Vectors, using existing Vector', function() {
            var v1 = new Vector(2, 1);
            assert.equal(new Vector(3, 3).toString(), (v1.add(new Vector(1, 2), v1).toString()));
        });
    });

    describe('multiplyScalar()', function() {
        it('should multiply with scalar, creating new Vector', function() {
            assert.equal(new Vector(6, 3).toString(), (new Vector(2, 1).multiplyScalar(3)).toString());
        });
        it('should multiply with scalar, using existing Vector', function() {
            var v1 = new Vector(2, 1);
            assert.equal(new Vector(6, 3).toString(), (v1.multiplyScalar(3, v1).toString()));
        });
    });

    describe('normalize', function() {
        it('should normalize the vector, creating new Vector', function() {
            assert.equal(1, new Vector(7, 4).normalize().length());
        });
        it('should normalize the vector, using existing Vector', function() {
            var v1 = new Vector(8, 9);
            assert.equal(1, v1.normalize(v1).length());
        });
    });

    describe('length', function() {
        it('should calculate the right length', function() {
        assert.equal(new Vector(2, 0).length(), 2);
        });
    });
});