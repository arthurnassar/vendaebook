// declaração de variaveis
const rightArrow = document.querySelector(".carrossel-pass-right");
const leftArrow = document.querySelector(".carrossel-pass-left");
const rightArrowMob = document.querySelector(".carrossel-pass-right-mob");
const leftArrowMob = document.querySelector(".carrossel-pass-left-mob");
var carrosselContainer = document.querySelector(".carrossel-container-container");
var carrosselContainerMob = document.querySelector(".carrossel-container-container-mobile");
var indexMob = 0;
const px = "px";
var index = -100;



rightArrow.addEventListener("click", () => {
    if (index < 2579    ) {
    index += 1339.5;
    carrosselContainer.style.right = index + px;
}
    else {
        
    }
})


leftArrow.addEventListener("click", () => {
    if (index > 0) {
    index -= 1339.5;
    carrosselContainer.style.right = index + px;
    
}
    else {
        
    }
})

// MOBILE CARROSSEL

rightArrowMob.addEventListener("click", () => {
    if (indexMob < 3800) {
    indexMob += 475;
    carrosselContainerMob.style.right = indexMob + px;
}
    else {
        
    }
})


leftArrowMob.addEventListener("click", () => {
    if (indexMob > 0) {
    indexMob -= 475;
    carrosselContainerMob.style.right = indexMob + px;
    
}
    else {
        
    }
})

