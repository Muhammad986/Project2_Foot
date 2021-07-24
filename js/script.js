"use strict";

require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';


import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import form from './modules/forms';
import slider from './modules/slider';
import {openModel} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    //Что-то на подобии рекламы с таймером
    const setTimerId = setTimeout(() => openModel('.modal', setTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', setTimerId);
    timer('.timer', '2021-04-25');
    cards();
    calc();
    form('form', setTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});