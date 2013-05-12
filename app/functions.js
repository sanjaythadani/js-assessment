if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(data) {
            return str + ', ' + data;
        };
    },

    makeClosures : function(arr, fn) {
        var result = [],
            constructFunc = function(data) {
                return function() {
                    return fn(data);
                };
            };
        arr.forEach(function(item) {
            result.push(constructFunc(item));
        });
        return result;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
            return fn.call(this, str1, str2, str3);
        };
    },

    useArguments : function() {
        var total = 0;
        for (var i = 0, max = arguments.length; i < max; i++) {
            total += arguments[i];
        };

        return total;
    },

    callIt : function(fn) {
        var args = [].slice.call(arguments, 1, arguments.length);
        fn.apply(this, args);
    },

    curryIt : function(fn) {
        var args = [].slice.call(arguments, 1, arguments.length);

        return function() {
            var addArgs = [].slice.call(arguments, 0, arguments.length);
            return fn.apply(null, args.concat(addArgs));
        };
    }
  };
});
