
function kuukausi(num) {
let result = '';
  switch(num) {
    case 1:
      result = 'Tammikuu';
      break;
    case 2:
      result = 'Helmikuu';
      break;    
    case 3:
      result = 'Maaliskuu';
      break;
    case 4:
      result = 'Huhtikuu';
      break;
    case 5:
      result = 'Toukokuu';
      break;
    case 6:
      result = 'Kesäkuu';
      break;
    case 7:
      result = 'Heinäkuu';
      break;
    case 8:
      result = 'Elokuu';
      break;
    case 9:
      result = 'Syyskuu';
      break;
    case 10:
      result = 'Lokakuu';
      break;
    case 11:
      result = 'Marraskuu';
      break;
    case 12:
      result = 'Joulukuu';
      break;
  }
  return result;
};

console.log(kuukausi(7));
