function pieninSuurin(...args) { //'rest parameter' eli '...' lukee kaikki numerot mitä on pistetty sulkujen sisään
  let result = []
  let suurin = Math.max(...args);
  let pienin = Math.min(...args);
  result.unshift(suurin);
  result.unshift(pienin);
  return result;
  };
  console.log(pieninSuurin(2, 3, 4, 5))
