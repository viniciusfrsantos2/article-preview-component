'use strict'

const shareCtnr = document.querySelector('.share-ctnr')
const avtCtnr = document.querySelector('.avt-ctnr');
const iconsDesk = document.querySelector('.icons-desktop');

const btnShare = document.querySelector('button.shr-icon-ctnr');

const shareImg = document.querySelector('button img');

const icons = document.querySelectorAll('.icon');
const links = document.querySelectorAll('a');

const changeBtnBackground = (screen) => {
        shareImg.classList.contains('chg-img-filter') ? btnShare.style.backgroundColor = `var(${screen})` :   btnShare.style.backgroundColor = 'var(--grayishBlue2)';
}

const loopIconsMobile = (type) => {
    icons.forEach( (icon) => {
        type === 'toggle' ? icon.classList.toggle('hide') :  icon.classList.add('hide');
    })
}

const resetStyle = () => {
    avtCtnr.classList.remove('hide');
    shareImg.classList.remove('chg-img-filter');
    shareCtnr.classList.remove('chg-background');
    loopIconsMobile('add');
    btnShare.style.backgroundColor = 'var(--grayishBlue2)';
    iconsDesk.classList.add('hide');
}

btnShare.addEventListener('click', function() {

    //* This verifies that the screen size is less than 800px
    if (window.innerWidth < 1024) { 
        avtCtnr.classList.toggle('hide');
        loopIconsMobile('toggle');
        shareImg.classList.toggle('chg-img-filter');
        changeBtnBackground('--grayishBlue')
        shareCtnr.classList.toggle('chg-background');
    } 
    else {
        shareImg.classList.toggle('chg-img-filter');
        changeBtnBackground('--veryDarkGrayishBlue');
        iconsDesk.classList.toggle('hide')
    }
})

links.forEach( (link) => {
    link.addEventListener('click', resetStyle);
})

document.addEventListener('DOMContentLoaded', resetStyle);
window.addEventListener('resize', resetStyle);