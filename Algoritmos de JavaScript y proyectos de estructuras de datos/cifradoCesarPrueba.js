function rot13(str) {
  let arr = str.split('');
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
	const initialCharCode = arr[i].charCodeAt(0);
	if(initiaCharCode > 65 && initialCharCode < 91){
		const rotCode = initialCharCode < 78 ? initialCharCode + 13 : initialCharCode -13;
	resultArr.push(String.fromCharCode(rotCode));
	}else{
	resultArr.push(String.fromCharCode(initialCharCode));
}
    
}
return resultArr.join("");
}

rot13("SERR PBQR PNZC");

function rot13(str) {
  return str.split('').map(c => {
    var cc = c.charCodeAt(0);

    if ('A' <= c && c <= 'Z')
      cc = ((cc - 65 + 13) % 26) + 65;
    else if ('a' <= c && c <= 'z')
      cc = ((cc - 97 + 13) % 26) + 97;
    return String.fromCharCode(cc);
  }).join('');;
}

console.log(rot13("SERR PBQR PNZC"));