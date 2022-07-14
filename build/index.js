"use strict";
var form = document.querySelector('.form');
var ddi = document.getElementById('ddi'); //Primer Input
var ddd = document.getElementById('ddd'); //Segundo
var tel = document.getElementById('tel'); //Tercero
// wssp
var wssp = document.getElementById('wssp');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    window.open("https://api.whatsapp.com/send?phone=".concat(ddi.value).concat(ddd === null || ddd === void 0 ? void 0 : ddd.value).concat(tel.value, "&text=Ol\u00E1"), '_blank');
});
wssp === null || wssp === void 0 ? void 0 : wssp.addEventListener('click', function (e) {
    e.preventDefault();
    if (ddi.value === '' || tel.value === '') {
        alert('found number is empty');
        return;
    }
    window.open("https://api.whatsapp.com/send?phone=".concat(ddi.value).concat(ddd === null || ddd === void 0 ? void 0 : ddd.value).concat(tel.value, "&text=https://zapsemsalvar.online/"), '_blank');
});
