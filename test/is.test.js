'use strict';

var assert = require('power-assert');
var is = require('../index.js');

describe('Check the type of object', function () {
	var obj = null;

	describe('Boolean', function () {
		before(function () {
			obj = true;
		});
		it('"true" is the type of Boolean', function () {
			assert(is('Boolean', obj));
		});
	});

	describe('Boolean', function () {
		before(function () {
			obj = false;
		});
		it('"false" is the type of Boolean', function () {
			assert(is('Boolean', obj));
		});
	});

	describe('Boolean', function () {
		before(function () {
			obj = new Boolean(true);
		});
		it('"new Boolean(true)" is the type of Boolean', function () {
			assert(is('Boolean', obj));
		});
	});

	describe('Number', function () {
		before(function () {
			obj = 0;
		});
		it('"0" is the type of Number', function () {
			assert(is('Number', obj));
		});
	});

	describe('Number', function () {
		before(function () {
			obj = 1;
		});
		it('"1" is the type of Number', function () {
			assert(is('Number', obj));
		});
	});

	describe('Number', function () {
		before(function () {
			obj = -1;
		});
		it('"-1" is the type of Number', function () {
			assert(is('Number', obj));
		});
	});

	describe('Number', function () {
		before(function () {
			obj = new Number(1);
		});
		it('"new Number(1)" is the type of Number', function () {
			assert(is('Number', obj));
		});
	});

	describe('String', function () {
		before(function () {
			obj = "";
		});
		it('"" is the type of String', function () {
			assert(is('String', obj));
		});
	});

	describe('String', function () {
		before(function () {
			obj = "text";
		});
		it('"text" is the type of String', function () {
			assert(is('String', obj));
		});
	});

	describe('String', function () {
		before(function () {
			obj = new String('test');
		});
		it('"new String("test")" is the type of String', function () {
			assert(is('String', obj));
		});
	});

	describe('Object', function () {
		before(function () {
			obj = {};
		});
		it('"{}" is the type of Object', function () {
			assert(is('Object', obj));
		});
	});

	describe('Object', function () {
		before(function () {
			obj = new Object();
		});
		it('"new Object()" is the type of Object', function () {
			assert(is('Object', obj));
		});
	});

	describe('Array', function () {
		before(function () {
			obj = [];
		});
		it('"[]" is the type of Array', function () {
			assert(is('Array', obj));
		});
	});

	describe('Array', function () {
		before(function () {
			obj = new Array(1);
		});
		it('"new Array(1)" is the type of Array', function () {
			assert(is('Array', obj));
		});
	});

	describe('Math', function () {
		before(function () {
			obj = Math;
		});
		it('"Math" is the type of Math', function () {
			assert(is('Math', obj));
		});
	});

	describe('Date', function () {
		before(function () {
			obj = new Date();
		});
		it('"new Date()" is the type of Date', function () {
			assert(is('Date', obj));
		});
	});

	describe('RegExp', function () {
		before(function () {
			obj = new RegExp(/test/);
		});
		it('"new RegExp(/test/)" is the type of RegExp', function () {
			assert(is('RegExp', obj));
		});
	});

	describe('Function', function () {
		before(function () {
			obj = new Function();
		});
		it('"new Function()" is the type of Function', function () {
			assert(is('Function', obj));
		});
	});

	describe('Function', function () {
		before(function () {
			obj = function () {};
		});
		it('"function () {}" is the type of Function', function () {
			assert(is('Function', obj));
		});
	});

	describe('Error', function () {
		before(function () {
			obj = new Error();
		});
		it('"new Error()" is the type of Error', function () {
			assert(is('Error', obj));
		});
	});

	describe('Undefined', function () {
		before(function () {
			obj = undefined;
		});
		it('"undefined" is the type of Undefined', function () {
			assert(is('Undefined', obj));
		});
	});

	describe('Null', function () {
		before(function () {
			obj = null;
		});
		it('"null" is the type of Null', function () {
			assert(is('Null', obj));
		});
	});
});
