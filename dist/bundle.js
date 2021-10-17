/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_taimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taimer */ "./src/js/modules/taimer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/card */ "./src/js/modules/card.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");









window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_5__["openModal"])('.modal', modalTimerId), 50000);

    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    Object(_modules_taimer__WEBPACK_IMPORTED_MODULE_1__["default"])('2021-12-12');
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])('.offer__slide', '#total', '#current', '.offer__slider-prev', '.offer__slider-next');
    Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_card__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-modal]', '.modal', modalTimerId);
    Object(_modules_form__WEBPACK_IMPORTED_MODULE_6__["default"])('form',modalTimerId);
});



/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculator () {
    const result = document.querySelector('.calculating__result span');
    
      let sex, height, weight, age, ratio;
  
      if (localStorage.getItem('sex')) {
          sex = localStorage.getItem('sex');
      } else {
          sex = 'female';
          localStorage.setItem('sex', 'female');
      }
  
      if (localStorage.getItem('ratio')) {
          ratio = localStorage.getItem('ratio');
      } else {
          ratio = 1.375;
          localStorage.setItem('ratio', 1.375);
      }
  
      function calcTotal() {
          if (!sex || !height || !weight || !age || !ratio) {
              result.textContent = '____';
              return;
          }
          if (sex === 'female') {
              result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
          } else {
              result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
          }
      }
  
      calcTotal();
  
      function initLocalSettings(selector, activeClass) {
          const elements = document.querySelectorAll(selector);
  
          elements.forEach(elem => {
              elem.classList.remove(activeClass);
              if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                  elem.classList.add(activeClass);
              }
              if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                  elem.classList.add(activeClass);
              }
          });
      }
  
      initLocalSettings('#gender div', 'calculating__choose-item_active');
      initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
  
      function getStaticInformation(selector, activeClass) {
          const elements = document.querySelectorAll(selector);
  
          elements.forEach(elem => {
              elem.addEventListener('click', (e) => {
                  if (e.target.getAttribute('data-ratio')) {
                      ratio = +e.target.getAttribute('data-ratio');
                      localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                  } else {
                      sex = e.target.getAttribute('id');
                      localStorage.setItem('sex', e.target.getAttribute('id'));
                  }
      
                  elements.forEach(elem => {
                      elem.classList.remove(activeClass);
                  });
      
                  e.target.classList.add(activeClass);
      
                  calcTotal();
              });
          });
      }
  
      getStaticInformation('#gender div', 'calculating__choose-item_active');
      getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
  
      function getDynamicInformation(selector) {
          const input = document.querySelector(selector);
  
          input.addEventListener('input', () => {
              if (input.value.match(/\D/g)) {
                  input.style.border = "1px solid red";
              } else {
                  input.style.border = 'none';
              }
              switch(input.getAttribute('id')) {
                  case "height":
                      height = +input.value;
                      break;
                  case "weight":
                      weight = +input.value;
                      break;
                  case "age":
                      age = +input.value;
                      break;
              }
  
              calcTotal();
          });
      }
  
      getDynamicInformation('#height');
      getDynamicInformation('#weight');
      getDynamicInformation('#age');
  
}

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service */ "./src/js/services/service.js");

function card() {
    class CardMenu {
        constructor (src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 3;
            this.changeToBrub();
        }

        changeToBrub() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            
            `;
            this.parent.append(element);
        }
      
    }

   /*  new CardMenu (
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        100,
        ".menu .container").render();

     new CardMenu (
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        200,
        ".menu .container").render();

    new CardMenu (
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        120,
        ".menu .container").render();  */
    
        // forms


Object(_services_service__WEBPACK_IMPORTED_MODULE_0__["getResourse"])('http://localhost:3000/menu')
.then(data => {
    data.forEach(({img, alt, title, descr, price}) => {
        new CardMenu (img, alt, title, descr, price, '.menu .container').render();
    });
});      
}

/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service */ "./src/js/services/service.js");



function form(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

 
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            Object(_services_service__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal (message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId);
        
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class='modal__content'>
            <div class='modal__close data-close'>×</div>
            <div class='modal__title'>${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');

        }, 4000);
    }

   fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));

}
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal (modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    clearInterval(intervalShow);
}

function openModal (modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    
}



function modal(triggerSelector, modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector),
    modalTrigger = document.querySelectorAll(triggerSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });
   
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    const intervalShow = setInterval(openModal, 30000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
         window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}


/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(slidesSelector, totalSelector, currentSelector, prevSelector, nextSelector) {
    const slides = document.querySelectorAll(slidesSelector),
        total = document.querySelector(totalSelector),
        current = document.querySelector(currentSelector),
        prev = document.querySelector(prevSelector),
        next = document.querySelector(nextSelector);

    let slideIndex = 1;

    showSlide(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else if (slides.length >= 10) {
        total.textContent = slides.length;
    }

    function showSlide (n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach( item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else if (slides.length >= 10) {
            current.textContent = slideIndex;
        }
    }
    
    function plusSlide (n) {
        showSlide(slideIndex += n);
    }


    prev.addEventListener('click', ()=> {
        plusSlide(-1);
    });

    next.addEventListener('click', ()=> {
        plusSlide(1);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, classActive) {
    
    let tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);


    function hideTabContent() {
        tabsContent.forEach (item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(classActive);
        });

    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(classActive);

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
                
            });
        }
    });

}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/taimer.js":
/*!**********************************!*\
  !*** ./src/js/modules/taimer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function taimer(deadline) {
    function getTimeRemaining(endtime) {
        let time = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(time / (1000 * 60 * 60 * 24)), 
            hours = Math.floor((time / (1000 * 60 * 60)) % 24),
            min = Math.floor((time / (1000 * 60)) % 60),
            sec = Math.floor((time / 1000) % 60);

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': min, 
            'seconds': sec,

        };
    }

    function zero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
        
    }

    function getTimeHTML (endtime) {

        

        const days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            min = document.querySelector('#minutes'),
            sec = document.querySelector('#seconds'),
            update = setInterval(updateTime, 1000);

            updateTime ();

            function updateTime () {
                const time = getTimeRemaining(endtime);

                days.innerHTML = zero(time.days);
                hours.innerHTML = zero(time.hours);
                min.innerHTML = zero(time.minutes);
                sec.innerHTML = zero(time.seconds);

                if (time.total <= 0) {
                    clearInterval(update);
                }
            }
        
    }

    getTimeHTML(deadline);

}
/* harmony default export */ __webpack_exports__["default"] = (taimer);

/***/ }),

/***/ "./src/js/services/service.js":
/*!************************************!*\
  !*** ./src/js/services/service.js ***!
  \************************************/
/*! exports provided: getResourse, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourse", function() { return getResourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
async function getResourse(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error (`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
}

const postData = async (url, data) => {
    let res = await fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map