
function pieninSuurin(...args) {
  let result = []
  let suurin = Math.max(...args);
  let pienin = Math.min(...args);
  result.unshift(suurin);
  result.unshift(pienin);
  return result;
  };
  console.log(pieninSuurin(2, 3, 4, 5))
