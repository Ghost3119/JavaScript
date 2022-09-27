function destroyer(arr, ...valsToDelete) {
  return arr.filter(elem => !valsToDelete.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);