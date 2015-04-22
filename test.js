var test = require('tape');
var area = require('./2d-polygon-area');

test('square (CCW)', function(t) {
  var square = [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1]
  ];

  t.equal(area(square), -1);
  t.end();
});

test('square (CW)', function(t) {
  var square = [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1]
  ].reverse();

  t.equal(area(square), 1);
  t.end();
});
