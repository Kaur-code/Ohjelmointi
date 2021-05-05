{
let rekisteri = {
  'etunimi': [],
  'sukunimi': [],
  'osoite': [],
  'postinumero': [],
  'postitoimipaikka': [],
  'puhelin': [],
  'sähköposti': []
};

function poistaRekisteri() {
  rekisteri['etunimi'].pop();
  rekisteri['sukunimi'].pop();
  rekisteri['osoite'].pop();
  rekisteri['postinumero'].pop();
  rekisteri['postitoimipaikka'].pop();
  rekisteri['puhelin'].pop();
  rekisteri['sähköposti'].pop();
};

function uusiOsoiteRekisteri(etu, suku, osoite, posti, postipaikka, puhelin, email) {
  rekisteri['etunimi'].push(etu);
  rekisteri['sukunimi'].push(suku);
  rekisteri['osoite'].push(osoite);
  rekisteri['postinumero'].push(posti);
  rekisteri['postitoimipaikka'].push(postipaikka);
  rekisteri['puhelin'].push(puhelin);
  rekisteri['sähköposti'].push(email);
  }
  uusiOsoiteRekisteri('jaa', 'juu', 'ching chong', '4232', 'traa', '123213', 'eee@ara');
  
  console.log(rekisteri)
}
