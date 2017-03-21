
QUnit.module( "Sinon.Example.03_AjaxTest", {
  beforeEach: function( assert ) {
	  
  }, 
  afterEach: function( assert ) {
	  jQuery.ajax.restore();
  }
});


QUnit.test( "makes a GET request for todo items ", function( assert ) {
	 sinon.stub(jQuery, 'ajax');
	    getTodos(42, sinon.spy());

	    assert.ok(jQuery.ajax.calledWithMatch({ url: '/todo/42/items' }));
});