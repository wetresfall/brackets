module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const matchingBrackets = new Map(bracketsConfig);

  for (const bracket of str) {
    if (bracket === matchingBrackets.get(stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
};