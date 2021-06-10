"use strict";

let btn = document.querySelector('#change'),
   text = document.querySelector('#color'),
   wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', () => {
   let r = Math.floor(Math.random() * (256)),
      g = Math.floor(Math.random() * (256)),
      b = Math.floor(Math.random() * (256)),
      color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
   text.textContent = color;
   wrapper.style.backgroundColor = color;
   btn.style.color = color;

});