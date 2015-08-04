'use strict';

var pbp = require('pbp');

var Catamorphism = Object.create(null, {
  cata: pbp.enumerableValue(function(obj) {
    return obj[this.type].apply(this.type, this.args);
  }),
});

module.exports = {
  Catamorphism: Catamorphism,
};
