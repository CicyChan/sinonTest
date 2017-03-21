
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

QUnit.test( "calls the original function only once", function( assert ) {
    var callback = sinon.spy();
    var proxy = once(callback);

    var obj = {};
    
    proxy.call(obj, 1, 2, 3);

    assert.ok(callback.calledOn(obj));
    assert.ok(callback.calledWith(1, 2, 3));
});