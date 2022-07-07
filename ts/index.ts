const form = document.querySelector('.form');
const tel = <HTMLInputElement>document.getElementById('tel');

form?.addEventListener('submit', () => {
  window.open(
    `https://api.whatsapp.com/send?phone=${tel.value}&text=hi`,
    '_blank'
  );
});
