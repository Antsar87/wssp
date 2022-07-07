"use strict";
var form = document.querySelector('.form');
var tel = document.getElementById('tel');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function () {
    window.open("https://api.whatsapp.com/send?phone=".concat(tel.value, "&text=hi"), '_blank');
});
