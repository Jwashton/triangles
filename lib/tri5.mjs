/*
 * Okay, that was nice, but perhaps a bit wordy? Each function gets defined
 * twice in the code. It may serve a purpose, but it doesn't feel very dry.
 * 
 * Fortunately the delegation methods are so simple we should be able to define
 * them dynamically.
 */

// This could be part of your boiler plate. Define once, use for each of your
// models. Perhaps wrapped into or provided by a library or framework.
const delegateTo = function delegateTo(state, methods) {
  for (const [name, method] of Object.entries(methods)) {
    state[name] = () => method(state);
  }

  return state;
}

// Your actual code would start here.
const Util = {
  isTriangle({ a, b, c }) {
    return (a + b > c) && (a + c > b) && (b + c > a);
  }
};

const Triangle = function Triangle(a, b, c) {
  return delegateTo({ a, b, c }, Util);
};

export default Triangle;
