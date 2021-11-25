const prev = document.querySelector(`.slider .previous`);
const next = document.querySelector(`.slider .next`);
// console.log(prev, next);

const imagesDom = document.querySelectorAll(`.big-picture img`);
// console.log(imagesDom);

imagesDom[0].classList.add('first', 'active');
imagesDom[imagesDom.length - 1].classList.add('last');
// console.log(imagesDom[0], imagesDom[imagesDom.length - 1])

const smallPicDom = document.querySelectorAll(`.small-picture`);

smallPicDom[0].classList.add(`first`, `brightness`);
smallPicDom[4].classList.add(`last`);
// console.log(smallPicDom[0], smallPicDom[4])

//  Arrow Down (Next)
next.addEventListener(`click`, function(){
    let imageActive = document.querySelector(`.big-picture .active`);
    let smallPicActive = document.querySelector(`.small-picture.brightness`);
    // console.log(imageActive, smallPicActive);
    // console.log(imageActive.nextElementSibling, smallPicActive.nextElementSibling);

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

        smallPicActive.classList.remove(`brightness`);
        smallPicActive.nextElementSibling.classList.add(`brightness`);
    }
    else {
        imageActive.classList.remove(`active`);
        imagesDom[0].classList.add(`active`);

        smallPicActive.classList.remove(`brightness`);
        smallPicDom[0].classList.add(`brightness`);
    }
 })
//  End Arrow Down (Next)

// Arrow Up (Previous)
 prev.addEventListener(`click`, function(){
    let imageActive = document.querySelector(`.big-picture .active`);
    let smallPicActive = document.querySelector(`.small-picture.brightness`);
    // console.log(imageActive, smallPicActive);
    // console.log(imageActive.previousElementSibling, smallPicActive.previousElementSibling);

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

        smallPicActive.classList.remove(`brightness`);
        smallPicActive.previousElementSibling.classList.add(`brightness`);
    }
    else {
        imageActive.classList.remove(`active`);
        imagesDom[4].classList.add(`active`);

        smallPicActive.classList.remove(`brightness`);
        smallPicDom[4].classList.add(`brightness`);
    }
})
// Arrow Up (Previous)