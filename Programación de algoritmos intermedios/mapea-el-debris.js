function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(p => {
    return {
      name: p.name,
      orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((p.avgAlt + earthRadius), 3) / GM ))
    }
  })

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);