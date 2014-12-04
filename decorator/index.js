'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('bagle-component:decorator', {arguments: this.arguments}, { local: require.resolve('generator-bagle-component/decorator') });
  }
});

module.exports = Generator;