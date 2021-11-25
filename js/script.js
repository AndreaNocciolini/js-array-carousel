const prev = document.querySelector(`.slider .previous`);
const next = document.querySelector(`.slider .next`);
console.log(prev, next);

const images = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];
const containerImage = document.querySelector(`.big-picture`);
console.log(images, containerImage);

next.addEventListener(`click`, function(){
     let imageActive = document.querySelector(`.big-picture .active`);
     console.log(imageActive);
     console.log(imageActive.nextElementSibling);

     imageActive.classList.remove(`active`);
     imageActive.nextElementSibling.classList.add(`active`);
 })

 prev.addEventListener(`click`, function(){
    let imageActive = document.querySelector(`.big-picture .active`);
    console.log(imageActive);
    console.log(imageActive.previousElementSibling);

    imageActive.classList.remove(`active`);
    imageActive.previousElementSibling.classList.add(`active`);
})
