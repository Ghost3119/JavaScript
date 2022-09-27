function confirmEnding(str, target) {
  let end = str.slice(-target.length) === target; 
 return end;
}

confirmEnding("Bastian", "n");