'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result = new Array();
  for(var i=0;i < collectionA.length;i++) {
      for(var j=0;j<objectB.value.length;j++) {
          if(collectionA[i].key == objectB.value[j]) {
              collectionA[i].count --;
          }
      }
      result[i] = {'key':collectionA[i].key,'count':collectionA[i].count}
  }
  return result;
  return '实现练习要求，并改写该行代码。';
}
