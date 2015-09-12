require('mocha');
var assert = require('assert');
var Scaffold = require('scaffold');
var isScaffold = require('./');

describe('isScaffold', function () {
  it('should return false if the value is not a Scaffold:', function () {
    assert(isScaffold('a') === false);
    assert(isScaffold({}) === false);
    assert(isScaffold({ files: [] }) === false);
  });

  it('should return true if the value is a Scaffold:', function () {
    assert(isScaffold(new Scaffold({ files: [] })) === true);
  });
});
