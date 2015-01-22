# Is.js
オブジェクトの厳密な型判定を行うメソッドを提供する。

## Synopsis
以下の型を判定できる。
- String
- Number
- Array
- Object
- Boolean
- Undefined
- Null

## Usage
    var bool = is('Boolean', true); // true
    var str = is('String', 'text'); // true
    var obj = is('Object', {}); // true
    var arr = is('Array', 'text'); // false

### Node
    var is = require('./is');

### Browser
    <script type="text/javascript" src="is.js"></script>

### Test
    $ npm test // run jshint & mocha
