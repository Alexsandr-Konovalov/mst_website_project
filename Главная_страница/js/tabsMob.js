document.addEventListener('DOMContentLoaded', function() {

    let nextArrows = document.querySelectorAll('.next_projects');
    let prevArrows = document.querySelectorAll('.prev_projects');

    // Обработчик клика по стрелке "вперед"
    nextArrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            let currentSlide = document.querySelector('.tab_container_items_active');
            let nextSlide = currentSlide.nextElementSibling;

            if (nextSlide && nextSlide.classList.contains('tab_container_items')) {
                currentSlide.classList.remove('tab_container_items_active');
                nextSlide.classList.add('tab_container_items_active');
            } else {
                // Переход к первому слайду, если текущий слайд последний
                currentSlide.classList.remove('tab_container_items_active');
                document.querySelector('.tab_container_items').classList.add('tab_container_items_active');
            }
        });
    });

    // Обработчик клика по стрелке "назад"
    prevArrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            let currentSlide = document.querySelector('.tab_container_items_active');
            let prevSlide = currentSlide.previousElementSibling;

            if (prevSlide && prevSlide.classList.contains('tab_container_items')) {
                currentSlide.classList.remove('tab_container_items_active');
                prevSlide.classList.add('tab_container_items_active');
            } else {
                // Переход к последнему слайду, если текущий слайд первый
                currentSlide.classList.remove('tab_container_items_active');
                let allSlides = document.querySelectorAll('.tab_container_items');
                allSlides[allSlides.length - 1].classList.add('tab_container_items_active');
            }
        });
    });

});