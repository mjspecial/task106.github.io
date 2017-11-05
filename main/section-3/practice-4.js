'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var C = [];
    var b=1;
    var c=0;
    for(var i=0;i < collectionA.length;i++) {
        if(collectionA[i] == collectionA[i+1]) {
            b++;
        }
        else {
            if(collectionA[i].length > 1) {
                var d = collectionA[i];
                collectionA[i] = d[0];
                b = parseInt(d[2]);
            }
            C[c] = {'key':collectionA[i],'count':b};
            c++;
            b = 1;
        }
    }
    //C与objectB的比较
    for(var i=0;i<C.length;i++) {
        for(var j=0;j<objectB.value.length;j++){
            if(C[i].key == objectB.value[j]) {
                var c =parseInt(C[i].count/3);
                C[i].count -= c;
            }
        }
    }
    return C;
   return '实现练习要求，并改写该行代码。';
}
