if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	return $.Deferred(function(dfd) {
    		dfd.resolve(value);
    	});
    },

    manipulateRemoteData : function(url) {
    	return $.Deferred(function(dfd) {
	    	$.ajax({
	    		url: url
	    	}).then(function(data) {
	    		dfd.resolve(data.people.map(function(item) {
	    			return item.name;
	    		}).sort());
	    	});
    	});
    }
  };
});
