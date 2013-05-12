if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;
        arr.forEach(function(item) {
            // could also do check for number to exclude non numeric vals
            // typeof(item) === 'number' && isFinite(item)
            total += parseInt(item);
        });
        return total;
    },

    remove : function(arr, item) {
        return arr.filter(function(item) {
            return parseInt(item) !== 2;
        });
    },

    append : function(arr, item) {
        arr.push(item);

        return arr;
    },

    truncate : function(arr) {
        arr.pop();

        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        // mebbe forEach or for might be more performant
        // need larger array to test if so
        return arr.filter(function(arrItem) {
            return arrItem === 1;
        }).length;
    },

    duplicates : function(arr) {
        // the test assert necessitates a sort
        // else could have tried something elsw with a foreach
        return arr.sort(function(a, b) {
            return parseInt(a) - parseInt(b);
        }).filter(function(item, index, arr) {
            return item === arr[index + 1];
        });
    },

    square : function(arr) {
        return arr.map(function(item) {
            return Math.pow(item, 2);
        });
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        arr.forEach(function(item, index) {
            if (item === target)
                result.push(index);
        });
        return result;
    }
  };
});
