
function once(fn){
    var returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };	
};

function getTodos(listId, callback) {
    jQuery.ajax({
        url: '/todo/' + listId + '/items',
        success: function (data) {
            // Node-style CPS: callback(err, data)
            callback(null, data);
        }
    });
};

function throttle(callback) {
    var timer;
    return function () {
        clearTimeout(timer);
        var args = [].slice.call(arguments);
        timer = setTimeout(function () {
            callback.apply(this, args);
        }, 100);
    };
};

function messageOutPut(smessage){
	var sLog = "this is message output";
	console.log(sLog + smessage);
};



var oStudent = {
		name : "Jack Chan",
		age  : '21',
		introduction : function(sString){
			console.log(sString)
		}
}

