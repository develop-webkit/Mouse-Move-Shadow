const heroEL = document.querySelector(".hero");
const h1El = document.querySelector("h1");

function changeShadow(e){
    console.log(e)
    const h1Rect = h1El.getBoundingClientRect();
    console.log(h1Rect)
}

heroEL.addEventListener('mousemove',changeShadow);
