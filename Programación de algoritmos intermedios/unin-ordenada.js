function uniteUnique(arr) {
  let args = Array.from(arguments);
  let values = [];
  for(let i = 0;i < args.length;i++){
    for(let j = 0;j < args[i].length;j++){
      if(!values.includes(args[i][j])){
        values.push(args[i][j]);
      }
    }
  }
  return values;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
