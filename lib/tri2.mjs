/*
 * But what if we need mutation? We could swap `this` for something locally
 * defined. (This doesn't end up being the pretiest, but it is a nice
 * stepping-stone) This will at least protect us from some of the pit-falls of
 * the `this` keyword.
 * 
 * A major disadvantage to this first strategy is that our constructor function
 * is likely to get quite large as the size of our "class" grows.
 */

const Triangle = function Triangle(a, b, c) {
  const state = { a, b, c };

  return Object.assign(state, {
    isTriangle() {
      return (state.a + state.b > state.c) &&
             (state.a + state.c > state.b) &&
             (state.b + state.c > state.a);
    }
  });
};

export default Triangle;
