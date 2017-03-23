
var server;

QUnit.module( "Sinon.Example.05_FakeServer", {
  beforeEach: function( assert ) {
	  server = sinon.fakeServer.create()
  }, 
  afterEach: function( assert ) {
	  server.restore();
  }
});


QUnit.test( "calls callback with deserialized data", function( assert ) {
	 var callback = sinon.spy();
	    getTodos(42, callback);

	    // This is part of the FakeXMLHttpRequest API, simulate the Ajax reqeust
	    server.requests[0].respond(
	        200,
	        { "Content-Type": "application/json" },
	        JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
	    );

	    assert.ok(callback.calledOnce);
});