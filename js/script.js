const prev = document.querySelector(`.slider .previous`);
const next = document.querySelector(`.slider .next`);
console.log(prev, next);

// const images = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];
// const containerImage = document.querySelector(`.big-picture`);
// console.log(images, containerImage);

const imagesDom = document.querySelectorAll(`.big-picture img`);
console.log(imagesDom);

imagesDom[0].classList.add('first', 'active');
imagesDom[imagesDom.length - 1].classList.add('last');
console.log(imagesDom[0], imagesDom[imagesDom.length - 1])
console.log(imagesDom[4])
next.addEventListener(`click`, function(){
    let imageActive = document.querySelector(`.big-picture .active`);
    console.log(imageActive);
    console.log(imageActive.nextElementSibling);

    let imageActiveClasses = imageActive.classList;
    let arrowHelp = false;
    for (let i = 0; i < imageActiveClasses.length; i++) {
        if (imageActiveClasses[i] == `last`) {
            arrowHelp = true;
        }
        
    }
    if (!arrowHelp) {
        imageActive.classList.remove(`active`);
        imageActive.nextElementSibling.classList.add(`active`);
    }
    else {
        imageActive.classList.remove(`active`);
        imagesDom[0].classList.add(`active`);
    }
 })

 prev.addEventListener(`click`, function(){
    let imageActive = document.querySelector(`.big-picture .active`);
    console.log(imageActive);
    console.log(imageActive.previousElementSibling);

    let imageActiveClasses = imageActive.classList;
    let arrowHelp = false;
    for (let i = 0; i < imageActiveClasses.length; i++) {
        if (imageActiveClasses[i] == `first`) {
            arrowHelp = true;
        }
        
    }
    if (!arrowHelp) {
        imageActive.classList.remove(`active`);
        imageActive.previousElementSibling.classList.add(`active`);
    }
    else {
        imageActive.classList.remove(`active`);
        imagesDom[4].classList.add(`active`);
    }
})
