const cardOne = document.querySelector('.people__cards--one');
const cardTwo = document.querySelector('.people__cards--two');
const cardThree = document.querySelector('.people__cards--three');
export const allCards = document.querySelectorAll('.people__cards');

const dotOne = document.querySelector('.dot--one');
const dotTwo = document.querySelector('.dot--two');
const dotThree = document.querySelector('.dot--three');
export const alldot = document.querySelectorAll('.people__dot');

const sliderBox = document.querySelector('.wrapper__slider');
const box = document.querySelector('.people__box-slider')


let width = 102;
let move = 1;
let index = 1;
const changeCardOne = () => {
    dotOne.classList.add('dot--active')
    dotTwo.classList.remove('dot--active')
    dotThree.classList.remove('dot--active')

    sliderBox.style.transform = `translateX(${width}%)`;
    cardOne.style.transform = `translateX(${-move}%)`;
    cardOne.style.pointerEvents = "none";
    cardTwo.style.pointerEvents = "";
};
const changeCardTwo = () => {

    dotOne.classList.remove('dot--active');
    dotTwo.classList.add('dot--active');
    dotThree.classList.remove('dot--active');

    if (sliderBox.style.transform = `translateX(${-width}%)`) {
        sliderBox.style.transform = `translateX(${index / width}%)`
        cardOne.style.transform = "";
        };
        cardOne.style.pointerEvents = "";
        cardTwo.style.pointerEvents = "none";
        cardThree.style.pointerEvents = "none";


};

const changeCardThree = () => {
    dotOne.classList.remove('dot--active');
    dotTwo.classList.remove('dot--active');
    dotThree.classList.add('dot--active');

    sliderBox.style.transform = `translateX(${-width}%)`;
    cardOne.style.transform = `translateX(${move}%)`;
    cardOne.style.pointerEvents = "none";
    cardThree.style.pointerEvents = "";

};


dotOne.addEventListener('click', changeCardOne);
dotTwo.addEventListener('click', changeCardTwo);
dotThree.addEventListener('click', changeCardThree);
