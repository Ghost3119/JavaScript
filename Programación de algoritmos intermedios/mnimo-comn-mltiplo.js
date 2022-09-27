function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiplo = max;
  for (var i = max; i >= min; i--) {
    if (multiplo % i !== 0) {
      multiplo += max;
      i = max;
    }
  }
  return multiplo;
}

smallestCommons([1, 5]);