import test from 'ava';

import Triangle from '../lib/first.mjs';

test('viewing side lengths', t => {
  const triangle = new Triangle(3, 4, 5);

  t.is(triangle.a, 3);
  t.is(triangle.b, 4);
  t.is(triangle.c, 5);
});

test('checking triangle-ness', t => {
  const right = new Triangle(3, 4, 5);
  const bad = new Triangle(1, 2, 3);

  t.true(right.isTriangle());
  t.false(bad.isTriangle());
});

test('works without new', t => {
  const right = Triangle(3, 4, 5);

  t.true(right.isTriangle());
});