
QUnit.module( "Sinon.Example.02_Stub", {
  beforeEach: function( assert ) {
	  
  }, 
  afterEach: function( assert ) {}
});


QUnit.test( "Calles the origna funciton ", function( assert ) {
	  var callback = sinon.stub().returns(42);
	  var proxy = once(callback);
	    
	  assert.equal(proxy(), 42);
});