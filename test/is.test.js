var assert = require('power-assert');
var is = require('../index.js');
describe('オブジェクトの型チェック', function () {
	describe('真偽値', function () {
		beforeEach(function () {
			this.obj = true;
		});
		it('true の型は Boolean', function () {
			assert(is('Boolean', this.obj));
		});
	});
	describe('数値 - 0', function () {
		beforeEach(function () {
			this.obj = 0;
		});
		it('0 の型は Number', function () {
			assert(is('Number', this.obj));
		});
	});
	describe('文字列', function () {
		beforeEach(function () {
			this.obj = "text";
		});
		it('"text" の型は String', function () {
			assert(is('String', this.obj));
		});
	});
	describe('オブジェクト', function () {
		beforeEach(function () {
			this.obj = {};
		});
		it('{} の型は Object', function () {
			assert(is('Object', this.obj));
		});
	});
	describe('配列', function () {
		beforeEach(function () {
			this.obj = [];
		});
		it('[] の型は Array', function () {
			assert(is('Array', this.obj));
		});
	});
	describe('未定義値', function () {
		beforeEach(function () {
			this.obj = undefined;
		});
		it('undefined の型は Undefined', function () {
			assert(is('Undefined', this.obj));
		});
	});
	describe('NULL値', function () {
		beforeEach(function () {
			this.obj = null;
		});
		it('null の型は Null', function () {
			assert(is('Null', this.obj));
		});
	});
});
