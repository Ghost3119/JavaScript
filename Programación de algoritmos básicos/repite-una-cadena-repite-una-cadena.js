function repeatStringNumTimes(str, num) {
  let strRepeat = "";
  for(let i = 0;i < num; i++){
  strRepeat  += str;
  }
  return strRepeat;
}

repeatStringNumTimes("abc", 3);