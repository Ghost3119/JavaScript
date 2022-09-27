function fearNotLetter(str) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let len = str.length;
  var start = abc.indexOf(str[0]);
  for (let i = start; i < start + len; i++) {
    if (!str.includes(abc[i])) {
      return abc[i];
    }
  }
  return console.log(str);
}

fearNotLetter("abce");