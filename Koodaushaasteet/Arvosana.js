function arvosana(nimi, num) {
  if(num < 50) {
    return nimi + ' Hylätty';
  }
  else if(num < 60) {
  return nimi + ' T1';
  }
  else if(num < 70) {
    return nimi + ' T2';
  }
  else if(num < 80) {
    return nimi + ' H3';
  }
  else if(num < 90) {
    return nimi + ' H4';
  }
  else if(num < 100) {
    return nimi + ' K5';
  }
}
console.log(arvosana('tuomas', 52))
