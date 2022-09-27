function spinalCase(str) {
  let newStr = str.trim().split(/\s|_|(?=[A-Z])/).join("-");
  return newStr.toLowerCase();
}

spinalCase('This Is Spinal Tap');