
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


QUnit.test( "Calles the origna funciton ", function( assert ) {
    var callback = sinon.stub();
    callback.withArgs(42).returns(1);
    callback.withArgs(1).throws("TypeError");

    assert.deepEqual(callback(42), 1 , "1 is returned"); // 
});

QUnit.test( "Test sub with Object Method", function( assert ) {
	var stub = sinon.stub(oStudent, "introduction");
	
	stub();
	
	assert.ok(stub.called);
	
	stub.restore();
});

QUnit.test( "Test stub with Object Method and replace with a new function", function( assert ) {
	//var stub = sinon.stub(oStudent, "introduction", function(){ return "stub";});
	
	//* New way to callse fake method
	var stub = sinon.stub(oStudent, "introduction").callsFake( function(){ return "stub";} );
		
	assert.deepEqual(stub(), "stub", "replace function is ok");
	
	stub.restore();
});