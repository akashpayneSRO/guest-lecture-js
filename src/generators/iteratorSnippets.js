export const iteratorSnippet = `
const x = { a: 1, b: 2 };
x[Symbol.iterator] = () => {
  let i = 0;
  return {
    next() {
      switch (i++) {
        case 0:
          return { done: false, value: x.a };
        case 1:
          return { done: false, value: x.b };
        default:
          return { done: true };
      }
    }
  };
};
for (const i of x) {
  console.log(i);
}
`.trim();
export const introSnippet = `
function* myGen() {
  console.log("before yield");
  yield 1;
  console.log("between yields");
  yield 2;
  console.log("after yield");
  return 3;
}

const x = myGen();
for (i of myGen()) {
  console.log(i);
}
x.next();
`.trim();
export const introConvertedSnippet = `
function myGen() {
  const x = {
    next: function() {
      this.next = function() {
        this.next = function() {
          console.log("after yield");
          return { done: true, value: 3 };
        };
        console.log("between yield");
        return { done: false, value: 2 };
      };
      console.log("before yield");
      return { done: false, value: 1 };
    }
  };
  x[Symbol.iterator] = () => x;
  return x;
}
`.trim();
