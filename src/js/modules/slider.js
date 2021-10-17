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
export default slider;