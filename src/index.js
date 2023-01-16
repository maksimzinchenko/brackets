module.exports = function check(str, bracketsConfig) {
  // your solution
  stack = [];
  hash = {};
  brackets = new Set();

  for (i of bracketsConfig) {
    hash[i[0]] = i[1];
    brackets.add(i[0]);
    brackets.add(i[1]);
  }

  for (s of str) {
    if (brackets.has(s)) {
      if (hash[s]) {
        if (hash[s] === s) {
          if (s === stack[stack.length - 1]) {
            stack.pop();
          } else {
            stack.push(hash[s]);
          }
        } else {
          stack.push(hash[s]);
        }
      } else if (s === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
