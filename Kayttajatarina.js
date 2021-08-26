function emailIsValid (email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
function tarkasta() {
  let nimi = document.querySelector('#nimi');
  let email1 = document.querySelector('#email');
  let ika = document.querySelector('#ika');
  let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ö'];
  alph2 = [];
  for (let i = 0; i < alph.length; i++) {
    let ding = alph[i].toUpperCase()
    alph2.push(ding);
  };
  if (nimi.value.length < 3) {
    alert('ANNA VÄHINTÄÄN KOLMEN KIRJAIMEN NIMEN!')
    return false;
  };
  if(emailIsValid(email1.value)) {
    console.log('wow')
   } else {
     alert("ANNA OIKEA SÄHKÖPOSTIOSOITTEESI!");
    return false;
  };
  for (let i = 0; i < ika.value.length; i++) {
    for (let j = 0; j < alph.length; j++) {
      if (ika.value[i] == alph[j]) {
        alert('ANNA IKÄSI NUMEROILLA!');
        return false;
      }
      for (let k = 0; k < alph2.length; k++) {
        if (ika.value[i] == alph2[k]) {
          alert('ANNA IKÄSI NUMEROILLA!');
          return false;
        }
      }
    }
  }
  if (ika.value < 4 || ika.value > 130) {
    alert('ANNA OIKEA IKÄSI!')
    return false;
  }
};
