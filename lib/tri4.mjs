/*
 * Elixir-like pure functions are nice. I'd live there if I could. But you have
 * an exercise with tests to make pass. So how can we get our interface back?
 * 
 * Well, the Delegation patter actually works really well here. We can combine
 * the two strategies we've learned about for fun and profit!
 */

const Util = {
  isTriangle({ a, b, c }) {
    return (a + b > c) && (a + c > b) && (b + c > a);
  }
};

const Triangle = function Triangle(a, b, c) {
  const state = { a, b, c };

  return Object.assign(state, {
    isTriangle() {
      return Util.isTriangle(state);
    }
  });
};

export default Triangle;
