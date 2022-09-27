function mutation(arr) {
  var check = 0;
  for (let i = 0; i < arr[1].length; i++) {
    check = arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase());
    if (check == -1) {
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]);