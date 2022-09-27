function convertHTML(str) {

  var temporal = str.split("");

  for (let i = 0; i < temporal.length; i++) {
    switch (temporal[i]) {
      case "<":
        temporal[i] = "&lt;";
        break;
      case "&":
        temporal[i] = "&amp;";
        break;
      case ">":
        temporal[i] = "&gt;";
        break;
      case '"':
        temporal[i] = "&quot;";
        break;
      case "'":
        temporal[i] = "&apos;";
        break;
    }
  }
  temporal = temporal.join("");
  return temporal;
}

convertHTML("Dolce & Gabbana");
console.log(convertHTML("Dolce & Gabbana"));