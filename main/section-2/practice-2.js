'use strict';

module.exports = function countSameElements(collection) {
    var a = [];
    var b=1;
    var c=0;
    for(var i=0;i < collection.length;i++) {
        if(collection[i] == collection[i+1]) {
            b++;
        }
        else {
            if(collection[i].length > 1) {
                var d = collection[i];
                collection[i] = d[0];
                b = parseInt(d[2]);
            }
            a[c] = {'key':collection[i],'count':b};
            c++;
            b = 1;
        }
    }
    return a;
    // return '实现练习要求，并改写该行代码。';
}
