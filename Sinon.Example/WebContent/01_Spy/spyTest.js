
QUnit.module( "Sinon.Example.01_Spy", {
  beforeEach: function( assert ) {
	  
  }, 
  afterEach: function( assert ) {}
});


QUnit.test( "Calles the origna funciton ", function( assert ) {
    var callback = sinon.spy();
    var proxy = once(callback);

    proxy();

    assert.ok(callback.called);
});


QUnit.test( "calls the original function only once", function( assert ) {
    var callback = sinon.spy();
    var proxy = once(callback);

    proxy();
    proxy();

    assert.ok(callback.calledOnce);
});

QUnit.test( "calls original function with right this and args", function( assert ) {
    var callback = sinon.spy();
    var proxy = once(callback);

    var obj = {};
    
    proxy.call(obj, 1, 2, 3);

    assert.ok(callback.calledOn(obj));
    assert.ok(callback.calledWith(1, 2, 3));
});

QUnit.test( "Spy Test for funciton with paramters", function( assert ) {
   var proxy = sinon.spy(messageOutPut);
   proxy("Spy Test with Paramter");
   
   assert.ok(proxy.called);
});

QUnit.test( "Spy Test for Object Methd with paramters", function( assert ) {
	   var proxy = sinon.spy(oStudent, "introduction");
	   
	   proxy.withArgs("SpyTest with Object Method");
	   oStudent.introduction("SpyTest with Object Method")
	   
	   assert.ok(proxy.withArgs("SpyTest with Object Method").calledOnce);
	   
	   oStudent.introduction.restore();
	   
	});