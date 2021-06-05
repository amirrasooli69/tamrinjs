'use strict';

const firstPage = document.querySelector('.firstpage');
const secondPage = document.querySelector('.secondpage');
const thirdPage = document.querySelector('.thirdpage');

const mainTitle = document.querySelector('.firstpage h1');
const background = document.querySelector('.background');
const foreground = document.querySelector('.foreground');
const middleground = document.querySelector('.middleground');
const spans = document.querySelectorAll('.secondpage h1 span');
const spans2 = document.querySelector('.spans');

const FIRST_PAGE_MAX_SCROLL = 500;
const FIRST_TRANS_MIN = 400;
const FIRST_TRANS_MAX = 600;
const SECONDPAGE_BR = 1100;

thirdPage.style.opacity = 0;

document.addEventListener("scroll" , function (event) {
    //console.log('scrooooollll');
    let scrolloffset = window.pageYOffset;

    if(scrolloffset <= FIRST_PAGE_MAX_SCROLL){
        secondPage.style.opacity = 0;
        firstPage.style.opacity = 1;
        let p = scrolloffset / FIRST_PAGE_MAX_SCROLL;

        mainTitle.style.transform = `scale(${1 + (0.1 + p)})`;
        background.style.transform = `scale(${1 + (0.6 * p)})`;
        foreground.style.transform = `scale(${1 + p})`;
        middleground.style.transform = `scale(${1 + (0.4 * p)})`;
    }

    if(scrolloffset > FIRST_TRANS_MIN && scrolloffset <= FIRST_TRANS_MAX){
        let op = scrolloffset / FIRST_TRANS_MAX;
        firstPage.style.opacity = 1 - op; 
        secondPage.style.opacity = op;

    }else if(scrolloffset > FIRST_TRANS_MAX && scrolloffset <= SECONDPAGE_BR){
        let yChanger = scrolloffset - FIRST_TRANS_MAX;
        spans2.style.opacity = 1;
        spans[0].style.transform = `translate3d(0, ${yChanger}px,0)`;
        spans[2].style.transform = `translate3d(0, -${yChanger}px,0)`;
    }else {
        let thirdScroll = scrolloffset - SECONDPAGE_BR;
        thirdPage.style.opacity = 1;
        spans2.style.opacity =0;
        app.style.transform = `translate3d(0, -${thirdScroll}px,0)`;
    }
});