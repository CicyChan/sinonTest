
var server;

QUnit.module( "Sinon.Example.06_FakeTime", {
  beforeEach: function( assert ) {

  }, 
  afterEach: function( assert ) {

  }
});


QUnit.test( "test should assert fuzzy", function( assert ) {
    var book = {
            pages: 42,
            author: "cjno"
        };
    var spy = sinon.spy();

    spy(book);

   sinon.assert.calledWith(spy, sinon.match({ author: "cjno" }));
   sinon.assert.calledWith(spy, sinon.match.has("pages", 42));
   
   assert.ok(spy.calledOnce);
});