
var server;

QUnit.module( "Sinon.Example.06_FakeTime", {
  beforeEach: function( assert ) {

  }, 
  afterEach: function( assert ) {

  }
});


QUnit.test( "calls callback after 100ms", function( assert ) {
    var myAPI = { method: function () {} };

    var mock = sinon.mock(myAPI);
    
    var expections = mock.expects("method");
    
    expections();

    mock.verify();
    assert.ok(expections.calledOnce);
    
    mock.restore();

});