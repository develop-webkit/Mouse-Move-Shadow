"use strict;"

const heroEL = document.querySelector(".hero");
const h1El = document.querySelector("h1");
let xValue = 0;
let yValue = 0;

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
    console.log("X:",e.x,"Width-Mid:",window.innerWidth / 2,"Y:",e.y,"Height-mid",(window.innerHeight / 2 ));
    if(e.x < (window.innerWidth / 2) && e.y < (window.innerHeight / 2)){
        console.log("Top left","X:",xValue,"Y:",yValue);
        //      0 < -10
        if(xValue > -10)
            {--xValue};
        if(yValue >  -10)
            {--yValue};
        h1El.style.textShadow = `${xValue}px ${yValue}px 5px rgba(0,0,0,1)`;
    }else if(e.x > (window.innerWidth / 2) && e.y < (window.innerHeight / 2)){
        console.log("top right",xValue,"Y:",yValue);
        if(xValue < 10)
            {++xValue};
        if(yValue >  -10)
            {--yValue};
        h1El.style.textShadow = `${xValue}px ${yValue}px 5px rgba(0,0,0,1)`;
    }else if(e.x < (window.innerWidth / 2) && e.y > (window.innerHeight / 2)){
        if(xValue > -10)
            {--xValue};
        if(yValue <  10)
            {++yValue};
        console.log("bottom left",xValue,"Y:",yValue);
        h1El.style.textShadow = `${xValue}px ${yValue}px 5px rgba(0,0,0,1)`;
    }else if(e.x > (window.innerWidth / 2) && e.y > (window.innerHeight / 2)){
        if(xValue < 10)
            {++xValue};
        if(yValue <  10)
            {++yValue};
        console.log("bottom right",xValue,"Y:",yValue);
        h1El.style.textShadow = `${xValue}px ${yValue}px 5px rgba(0,0,0,1)`;
    }
}

heroEL.addEventListener('mousemove',debounce(changeShadow));
