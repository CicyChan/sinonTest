
var xhr, request;

QUnit.module( "Sinon.Example.04_FakeXMLHttpRequest", {
  beforeEach: function( assert ) {
	  xhr = sinon.useFakeXMLHttpRequest();
	    requests = [];
	    xhr.onCreate = function (req) { requests.push(req); };
  }, 
  afterEach: function( assert ) {
	  xhr.restore();
  }
});


QUnit.test( "makes a GET request for todo items ", function( assert ) {
	getTodos(42, sinon.spy());

    assert.equal(requests.length, 1, "request Length is 1");
    assert.equal(requests[0].url, "/todo/42/items", "request URL is /todo/42/items");
});