/*
 * The goal is to avoid `this`. I'd recommend two strategies.
 *
 * 1. Form a closure over the data we want.
 * 2. Pass the data we want.
 *
 * Both of these are heavily inspired by functional concepts. There are several
 * way that these strategies can be applied, with various trade-offs to choose
 * from.
 * 
 * To start off, here I have a constructor function that returns an object.
 * Because that object is defined inside the constructor, it has access to the
 * constructor's paramteters.
 * 
 * I have frozen the resulting object, because this simple model falls apart in
 * a world with mutations. If we can get away with an immutable API, then we're
 * done.
 */

const Triangle = function Triangle(a, b, c) {
  return Object.freeze({
    a, b, c,

    isTriangle() {
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  });
};

export default Triangle;
