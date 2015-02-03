(function (root, factory) {
	'use strict';

	if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.is = factory();
	}
}(this, function () {
	'use strict';

	var is = function (type, obj) {
		if (typeof type === 'undefined') {
			throw new Error('type is required');
		}

		var cls = Object.prototype.toString.call(obj).slice(8, -1);
		return cls === type;
	};

	return is;
}));
