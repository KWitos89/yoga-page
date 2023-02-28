export const burgerBtn = document.querySelector('.header__burgerBtn');
export const menu = document.querySelector('.header__menu');
export const bodyEl = document.body;
export const itemsEl = document.querySelectorAll('.header__items')

export const overflow = () => {
    bodyEl.classList.toggle('overflow')
}


//  Animaited Button Burger //

 export const clickBurgerBtn = () => {
    if (burgerBtn.classList.contains('active')) {

        burgerBtn.classList.toggle('no--active')

    } else {

        burgerBtn.classList.add('active')
    };
};

// // Open Mobile Menu //

export const openMenu = () => {
    menu.classList.toggle('header__menu--active')

    overflow()
    clickBurgerBtn()
}
// Close Menu Mobile Click Outside //

export const closeOutside = (e) => {

    if (menu.classList.contains('header__menu--active')) {

        if (!menu.contains(e.target))

            openMenu()

        if (burgerBtn.contains(e.target))
            openMenu()
    }
}

//  Close Menu When Chang Siaze Screen //


export const resize = () => {


    if (window.innerWidth > 650) {
        menu.classList.remove('header__menu--active')
        burgerBtn.classList.add('no--active')
        bodyEl.classList.remove('overflow')
    }
};



window.addEventListener('resize', resize);
document.addEventListener('mouseup', closeOutside);
burgerBtn.addEventListener('click', openMenu);