const cardOne = document.querySelector('.people__cards--one');
const cardTwo = document.querySelector('.people__cards--two');
const cardThree = document.querySelector('.people__cards--three');
// export const allCards = document.querySelectorAll('.people__cards');

const dotOne = document.querySelector('.dot--one');
const dotTwo = document.querySelector('.dot--two');
const dotThree = document.querySelector('.dot--three');
export const alldot = document.querySelectorAll('.people__dot');

const sliderBox = document.querySelector('.wrapper__slider');
const box = document.querySelector('.people__box-slider')


let width = 102;
let index = 1;


const changeCardOne = () => {
    dotOne.classList.add('dot--active')
    dotTwo.classList.remove('dot--active')
    dotThree.classList.remove('dot--active')

    sliderBox.style.transform = `translateX(${width}%)`


    if (window.innerWidth <= 768) {
        let width = 102;

        sliderBox.style.transform = `translateX(${width}%)`
    }

};
const changeCardTwo = () => {

    dotOne.classList.remove('dot--active')
    dotTwo.classList.add('dot--active')
    dotThree.classList.remove('dot--active')

    if (sliderBox.style.transform = `translateX(${-width}%)`) {
        sliderBox.style.transform = `translateX(${index / width}%)`
    }

    if (window.innerWidth <= 375) {
        let width = 102;

        if (sliderBox.style.transform = `translateX(${-width}%)`) {
            sliderBox.style.transform = `translateX(${index / width}%)`
        }
    }

};

const changeCardThree = () => {
    dotOne.classList.remove('dot--active')
    dotTwo.classList.remove('dot--active')
    dotThree.classList.add('dot--active')

    sliderBox.style.transform = `translateX(${-width}%)`

    if (window.innerWidth <= 375) {
        let width = 102;

        sliderBox.style.transform = `translateX(${-width}%)`
        // box.style.paddingRight = '1.5rem';


    }

};


dotOne.addEventListener('click', changeCardOne);
dotTwo.addEventListener('click', changeCardTwo);
dotThree.addEventListener('click', changeCardThree);



// export const changeCard = () => {

//     allCards.forEach((card) => {

//         card.addEventListener('click', () => {
//             allCards.forEach(c => {
//                 if (c.classList.contains('people__cards--active')) {
//                     c.classList.remove('people__cards--active')
//                 }
//             })

//             card.classList.add('people__cards--active')
//         })

//     })


// }


// export const activeDot = () => {
//     alldot.forEach((dot) => {
//         dot.addEventListener('click', () => {
//             alldot.forEach(d => {
//                 if (d.classList.contains('dot--active')) {
//                     d.classList.remove('dot--active')
//                 }
//             })
//             dot.classList.add('dot--active')
//         })
//     })
// }



// activeDot()
