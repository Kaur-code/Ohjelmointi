function aakkosJarjestys(x) {
  let wow = Array.from(x); //'edcba' => 'e,d,c,b,a'
  let pow = wow.sort(); //'e,d,c,b,a' => 'a,b,c,d,e'
  let result = pow.join(''); //'a,b,c,d,e' => 'abcde'
  return result;
};

console.log(aakkosJarjestys('edcba'))
