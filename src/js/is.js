(function (root) {
	'use strict';

	var is = function (type, obj) {
		if (typeof type === 'undefined') {
			throw new Error('type is required');
		}

		var cls = Object.prototype.toString.call(obj).slice(8, -1);
		return cls === type;
	};

	if (typeof exports === 'object') {
		module.exports = is;
	} else {
		root.is = is;
	}
}((this || 0).self || global));
