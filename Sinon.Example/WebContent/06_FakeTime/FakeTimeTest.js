
var server;

QUnit.module( "Sinon.Example.06_FakeTime", {
  beforeEach: function( assert ) {
	  clock = sinon.useFakeTimers();
  }, 
  afterEach: function( assert ) {
	  clock.restore();
  }
});


QUnit.test( "calls callback after 100ms", function( assert ) {
	 var callback = sinon.spy();
	    var throttled = throttle(callback);

	    throttled();

	    clock.tick(99);
	    assert.ok(callback.notCalled);

	    clock.tick(1);
	    assert.ok(callback.calledOnce);

});

QUnit.test( "test should animate element over 500ms", function( assert ) {
	 var el = jQuery("<div></div>");
     el.appendTo(document.body);

     el.animate({ height: "200px", width: "200px" });
     clock.tick(510);

     assert.equal("200px", el.css("height"));
     assert.equal("200px", el.css("width"));

});