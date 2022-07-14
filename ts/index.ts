const form = document.querySelector('.form');
const ddi = <HTMLInputElement>document.getElementById('ddi'); //Primer Input
const ddd = <HTMLInputElement>document.getElementById('ddd'); //Segundo
const tel = <HTMLInputElement>document.getElementById('tel'); //Tercero

// wssp
const wssp = document.getElementById('wssp');

form?.addEventListener('submit', (e) => {
  e.preventDefault()
  window.open(
    `https://api.whatsapp.com/send?phone=${ddi.value}${ddd?.value}${tel.value}&text=Olá`,
    '_blank'
  );
});

wssp?.addEventListener('click', (e) => {
  e.preventDefault()
  if (ddi.value === '' || tel.value === '') {
    alert('telephone number is required');
    return;
  }

  window.open(
    `https://api.whatsapp.com/send?phone=${ddi.value}${ddd?.value}${tel.value}&text=https://zapsemsalvar.online/`,
    '_blank'
  );
 
});
