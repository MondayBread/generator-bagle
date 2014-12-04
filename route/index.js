'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('bagle-component:route', {arguments: this.arguments}, { local: require.resolve('generator-bagle-component/route') });
  }
});

module.exports = Generator;