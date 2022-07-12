const form = document.querySelector('.form');
const ddi = <HTMLInputElement>document.getElementById('ddi'); //Primer Input
const ddd = <HTMLInputElement>document.getElementById('ddd'); //Segundo
const tel = <HTMLInputElement>document.getElementById('tel'); //Tercero

form?.addEventListener('submit', () => {
  window.open(
    `https://api.whatsapp.com/send?phone=${ddi.value}${ddd?.value}${tel.value}&text=Olá`,
    '_blank'
  );
});
