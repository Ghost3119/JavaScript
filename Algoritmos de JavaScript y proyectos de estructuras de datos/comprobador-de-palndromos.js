function palindrome(str) {
  const nuevoStr = str.replace(/[\W_]/g, "").toLowerCase();
  let stringReverso = nuevoStr.split("").reverse().join("");
  return nuevoStr === stringReverso ? true : false;
}

console.log(palindrome("eye"));
palindrome("race car");
console.log(palindrome("nope"));