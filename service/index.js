'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('bagle-component:service', {arguments: this.arguments}, { local: require.resolve('generator-bagle-component/service') });
  }
});

module.exports = Generator;