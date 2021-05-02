const jsKortti = document.querySelectorAll(".kortit");

function kaannaKortti() {
  console.log('poopy');
  console.log(this);
}

jsKortti.forEach(kortti => kortti.addEventListener('click'. kaannaKortti))
