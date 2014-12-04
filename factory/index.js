'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('bagle-component:factory', {arguments: this.arguments}, { local: require.resolve('generator-bagle-component/factory') });
  }
});

module.exports = Generator;