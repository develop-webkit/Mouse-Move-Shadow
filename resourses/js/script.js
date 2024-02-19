"use strict;"

const heroEl = document.querySelector(".hero");
const h1El = document.querySelector("h1");
const walk = 100;

function debounce(func, wait = 2, immediate = true) {
    let timeout;
    return function(...args) {
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
  
      const later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(this, args);
        }
      };
  
      timeout = setTimeout(later, wait);
  
      if (callNow) {
        func.apply(this, args);
      }
    }
}

function changeShadow(e){
  const {offsetWidth: width, offsetHeight: height} = heroEl; 
  let {offsetX: x, offsetY: y} = e;
  if(e.target !== this){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  console.log(h1El.style)

  h1El.style.textShadow = `
    ${xWalk}px ${yWalk}px 3px rgba(${xWalk},${yWalk - xWalk},${yWalk},1)
  `;
  
}

heroEl.addEventListener('mousemove',debounce(changeShadow));
