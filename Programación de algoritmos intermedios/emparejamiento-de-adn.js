function pairElement(str) {
  var pares = {
    "A": ["A", "T"],
    "T": ["T", "A"],
    "C": ["C", "G"],
    "G": ["G", "C"]
  }
  return str.split("").map(function(elem){
    return pares[elem]
  });
}

pairElement("GCG");