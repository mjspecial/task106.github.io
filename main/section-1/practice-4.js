'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var a = new Array();
    for(var i=0;i < collectionA.length;i++) {
        for(var j=0;j < collectionB.value.length;j++) {
            if(collectionA[i].key == collectionB.value[j]) {
                a.push(collectionA[i].key);
                break;
            }
        }
    }
    return a;
    // return '实现练习要求，并改写该行代码。';
}
