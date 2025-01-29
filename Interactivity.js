const body =document.querySelector('body')
const section1cardContainer = document.querySelector('.section1cardContainer')

const handleScrollRight = () => {
    section1cardContainer.scrollBy (800, 0);
 };
 
 const handleScrollLeft = () => {
    section1cardContainer.scrollBy (-800, 0);
 };

 const menubtn = document.querySelector('.menu-btn').addEventListener('click', () =>document.querySelector('.main-menu').classList.toggle('show'));