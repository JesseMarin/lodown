// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    if(typeof value == "object" && !Array.isArray(value) && value !== null) {
        return 'object';
    } else if(Array.isArray(value)) {
        return 'array';
    } else if(typeof value === 'number') {
        return 'number';
    } else if(value === true || value === false) {
        return 'boolean';
    } else if(typeof value === 'function') {
        return 'function';
    } else if(typeof value === 'string') {
        return 'string';
    } else if(value === null) {
        return 'null';
    } else {return 'undefined' }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?(return empty array)
*   2) What if <number> is greater than <array>.length?(return array)
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, number) {
    const ans = [];
    
    
    if(_.typeOf(arr) !== 'array' || number < 0) {
        return [];
    } if(_.typeOf(number) !== 'number') {
        return arr[0];
    } if(number > arr.length) {
        return arr;
    }
    
    for(let i = 0; arr.length > i; i++) {
        if((i + 1) > number) {
            break;
        }
        
        ans.push(arr[i]);
    }
    return ans;
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(arr, number) {
    const ans = [];
    
    
    if(_.typeOf(arr) !== 'array' || number < 0) {
        return [];
    } if(_.typeOf(number) !== 'number') {
        return arr[arr.length - 1];
    } if(number > arr.length) {
        return arr;
    }
    
    for(let i = 0; arr.length > i; i++) {
        if((i + 2) > number) {
            ans.push(arr[i]);
        }
        
    }
    return ans;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
        
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(arr, val) {
    if(val === undefined) {
        return false;
    }
    for(let i = 0; arr.length > i; i++) {
        if(arr[i] === val) {
            return true;
        }
    }
    return false; //REPLACE W/ TERNARY OPERATORS LATER
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func) {
    //iterate over array
    if(Array.isArray(collection)) {
    for(let i = 0; collection.length > i; i++) {
            func(collection[i], i, collection);
            
        }
    } else {
        for(let key in collection) {
            func(collection[key], key, collection);
        }
    }
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr, func) {
    const send = [];

    _.each(arr, function(arrghe, i, arrgh) {
        if(func(arrghe, i, arrgh)) {
            send.push(arr[i]);
        } 
    }
    );

    return send;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
    const returnNum = [];
    
    if( _.typeOf(collection) === 'array') {
        for(let i = 0; i < collection.length; i++) {
            returnNum.push(func(collection[i], i, collection));
        }
    } else if(_.typeOf(collection) === 'object') {
        for(let key in collection) {
            returnNum.push(func(collection[key], key, collection));
        }
    }
    
    return returnNum;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, func) {
    const send = [];
    
    _.each(arr, function(arrghe, i, arrgh) {
        if(func(arrghe, i, arrgh) === false) {
            send.push(arr[i]);
        } 
    });
    
    return send;
};
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr, func) {
    const truthy = _.filter(arr, func); const falsey = _.reject(arr, func);
    
    return [truthy, falsey];
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func) {
    let ans = true;
    
    if(_.typeOf(func) === 'undefined') {
        _.map(collection, function(ele, key, collection) {
                if(ele === false) {ans = false} //check if each collection object is truthy, if not, change value to false
        });
    } else {
    
        _.each(collection, function(ele, indexOrKey, collection) {
            if (func(ele, indexOrKey, collection) === false) {
                ans = false;
            }
        });
    }
    return ans;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    let ans = false;
    if(_.typeOf(func) === 'undefined') {
        if(_.typeOf(collection) === 'array') {
            for(let i = 0; i < collection.length; i++) {
                if(collection[i] === true) {ans = true}
            }
        } else if(_.typeOf(func) === 'object') {
            for(let key in collection) {
                if(collection[key] === true) {ans = true}
            }
        }
    } else {
        
        _.map(collection, function(element, key, arr) {
            if(func(element, key, arr) === true) {
                ans = true;
            }
        });
    }
    
    return ans;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(arrObj, prop) {
    const returnArr = [];
    
    let runTimes = 0;
    _.map(arrObj, function() {
            let obj = arrObj[runTimes]; returnArr.push(obj[prop]);
            runTimes++;
    });
    
    return returnArr;

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
