import tabs from './modules/tabs';
import taimer from './modules/taimer';
import slider from './modules/slider';
import calculator from './modules/calculator';
import card from './modules/card';
import modal from './modules/modal';
import form from './modules/form';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    taimer('2021-12-12');
    slider('.offer__slide', '#total', '#current', '.offer__slider-prev', '.offer__slider-next');
    calculator();
    card();
    modal('[data-modal]', '.modal', modalTimerId);
    form('form',modalTimerId);
});

