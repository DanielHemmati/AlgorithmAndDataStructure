function toCamelCase(str) {
  if (!str) return "";
  let split = str.split(/\-|\_/g);

  let store = [];
  for (let i = 0; i < split.length; i++) {
    store.push(split[i].charAt(0).toUpperCase() + split[i].slice(1));
  }

  let res = store.join("");
  return str[0] === res[0].toUpperCase()
    ? res
    : res[0].toLowerCase() + res.slice(1);
}

let input = "the_stealth_warrior";
// console.log(toCamelCase(input));
// console.log(input[0].toUpperCase() + input.slice(1));
// console.log(input.slice(1))

//------------- other solution -------------
/**
 *
 * @param {string} str
 */
// really good
function second(str) {
  let regExp = /[-_]\w/gi;
  return str.replace(regExp, (char) => {
    return char.charAt(1).toUpperCase();
  });
}

console.log(second(input));
