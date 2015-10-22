'use strict';

var pbp = require('@ce/pbp');

var Catamorphism = Object.create(null, {
  cata: pbp.enumerableValue(function(obj) {
    return obj[this.type].apply(this.type, this.args);
  }),
});

function cata(f, obj) {
  return obj.cata(f);
}

module.exports = {
  Catamorphism: Catamorphism,
  cata: cata,
};
