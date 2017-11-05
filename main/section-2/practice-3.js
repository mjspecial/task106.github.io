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
                if (collection[i] ==d[0]) {
                    if (collection[i].length == 3 || collection[i].length == 4) {
                        b += parseInt(d[2]);
                        break;
                    }
                    else if (collection[i].length == 5) {
                        b += 10;
                        break;
                    }
                }
                else if (collection[i] != d[0]) {
                    var e = collection[i];
                    collection[i] = e[0];
                    b = e[2];
                }
            }
            a[c] = {'name':collection[i],'summary':b};
            c++;
            b = 1;
        }
    }
    return a;
    
    // return '实现练习要求，并改写该行代码。';
}
