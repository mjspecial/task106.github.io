'use strict';

module.exports = function countSameElements(collection) {
    var m = [];
    var b=1;
    var c=0;
    for(var i=0;i < collection.length;i++) {
        if(collection[i] == collection[i+1]) {
            b++;
        }
        else {
            m[c] = {'key':collection[i],'count':b};
            c++;
            b = 1;
        }
    }
    return m;
    //return '实现练习要求，并改写该行代码。';
}
