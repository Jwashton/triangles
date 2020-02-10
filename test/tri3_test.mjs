import test from 'ava';

import Triangle from '../lib/tri3.mjs';

/*
 * WARNING: Different interface. See next file for restored interface.
 */
test('viewing side lengths', t => {
  const triangle = Triangle.create(3, 4, 5);

  t.is(triangle.a, 3);
  t.is(triangle.b, 4);
  t.is(triangle.c, 5);
});

test('checking triangle-ness', t => {
  const right = Triangle.create(3, 4, 5);
  const bad = Triangle.create(1, 2, 3);

  t.true(Triangle.isTriangle(right));
  t.false(Triangle.isTriangle(bad));
});

test('works without new', t => {
  const right = Triangle.create(3, 4, 5);

  t.true(Triangle.isTriangle(right));
});

test('can be changed', t => {
  const right = Triangle.create(3, 4, 5);

  right.a = 1;

  t.false(Triangle.isTriangle(right));
});
