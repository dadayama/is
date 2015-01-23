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

		before(function () {
			obj = false;
		});
		it('"false" is the type of Boolean', function () {
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

		before(function () {
			obj = 1;
		});
		it('"1" is the type of Number', function () {
			assert(is('Number', obj));
		});

		before(function () {
			obj = -1;
		});
		it('"-1" is the type of Number', function () {
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

		before(function () {
			obj = "text";
		});
		it('"text" is the type of String', function () {
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

	describe('Array', function () {
		before(function () {
			obj = [];
		});
		it('"[]" is the type of Array', function () {
			assert(is('Array', obj));
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
