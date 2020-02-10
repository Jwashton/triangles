/*
 * Now lets look at the second strategy. What happens if we write our code as
 * we would in Elixir, with a much stronger separation between data and beavior?
 * 
 * Unfortunately the most direct application of this requires us to break our
 * interface. We'll fix that in a bit.
 *
 * In this world, Triangle is a JavaScript object that just behaves like a
 * module or namespace for a collection of functions.
 */

const Triangle = {
  create(a, b, c) {
    return { a, b, c };
  },

  isTriangle({ a, b, c }) {
    return (a + b > c) && (a + c > b) && (b + c > a);
  }
};

export default Triangle;
