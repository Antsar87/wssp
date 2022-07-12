"use strict";
var form = document.querySelector('.form');
var ddi = document.getElementById('ddi'); //Primer Input
var ddd = document.getElementById('ddd'); //Segundo
var tel = document.getElementById('tel'); //Tercero
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function () {
    window.open("https://api.whatsapp.com/send?phone=".concat(ddi.value).concat(ddd === null || ddd === void 0 ? void 0 : ddd.value).concat(tel.value, "&text=Ol\u00E1"), '_blank');
});
