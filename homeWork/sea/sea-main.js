// 所有模块都通过 define 来定义
define(function(require, exports, module) {
// 通过 require 引入依赖
	require('../jquery');

	var doThing = require('sea-function');
	doThing.doSomething();


});