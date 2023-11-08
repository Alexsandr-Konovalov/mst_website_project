// Получите кнопки "назад" и "вперед" по их ID
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const prevButtonMob = document.getElementById('prev_mob');
const nextButtonMob = document.getElementById('next_mob');

// Получите все радиокнопки и слайды
const radioButtons = document.querySelectorAll('input[name="slider"]');
const slides = document.querySelectorAll('.slide');

// Установите интервал времени для автоматической смены слайдов (в миллисекундах)
const autoSlideInterval = 5000; // Например, 5000 миллисекунд (5 секунд)

let autoSlideTimer;

// Функция для переключения к указанному слайду
function switchToSlide(slideIndex) {
    radioButtons[slideIndex].checked = true;
    updateSlideDisplay();
    updateRadioLabels();
}

// Функция для обновления отображения слайдов
function updateSlideDisplay() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    const currentSlideIndex = Array.from(radioButtons).findIndex(radio => radio.checked);
    slides[currentSlideIndex].classList.add('active');
}

// Функция для обновления отображения меток радиокнопок
function updateRadioLabels() {
    document.querySelectorAll('.navigation label').forEach(label => {
        label.classList.remove('active');
    });
    const currentSlideIndex = Array.from(radioButtons).findIndex(radio => radio.checked);
    document.querySelector('label[for="slide' + (currentSlideIndex + 1) + '"]').classList.add('active');
}

// Добавьте обработчики событий для радиокнопок
radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        updateSlideDisplay();
        updateRadioLabels();
        resetAutoSlideTimer();
    });
});

// Добавьте обработчики событий для кнопки "назад"
prevButton.addEventListener('click', () => {
    const currentSlideIndex = Array.from(radioButtons).findIndex(radio => radio.checked);
    const prevSlideIndex = (currentSlideIndex - 1 + radioButtons.length) % radioButtons.length;
    switchToSlide(prevSlideIndex);
    resetAutoSlideTimer();
});

// Мобильная Добавьте обработчики событий для кнопки "назад" 
prevButtonMob.addEventListener('click', () => {
    const currentSlideIndex = Array.from(radioButtons).findIndex(radio => radio.checked);
    const prevSlideIndex = (currentSlideIndex - 1 + radioButtons.length) % radioButtons.length;
    switchToSlide(prevSlideIndex);
    resetAutoSlideTimer();
});

// Добавьте обработчики событий для кнопки "вперед"
nextButton.addEventListener('click', () => {
    const currentSlideIndex = Array.from(radioButtons).findIndex(radio => radio.checked);
    const nextSlideIndex = (currentSlideIndex + 1) % radioButtons.length;
    switchToSlide(nextSlideIndex);
    resetAutoSlideTimer();
});

// Мобильная Добавьте обработчики событий для кнопки "вперед"
nextButtonMob.addEventListener('click', () => {
    const currentSlideIndex = Array.from(radioButtons).findIndex(radio => radio.checked);
    const nextSlideIndex = (currentSlideIndex + 1) % radioButtons.length;
    switchToSlide(nextSlideIndex);
    resetAutoSlideTimer();
});

// Функция для сброса таймера автоматической смены слайдов
function resetAutoSlideTimer() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(autoSwitchToNextSlide, autoSlideInterval);
}

// Функция для автоматической смены слайдов
function autoSwitchToNextSlide() {
    const currentSlideIndex = Array.from(radioButtons).findIndex(radio => radio.checked);
    const nextSlideIndex = (currentSlideIndex + 1) % radioButtons.length;
    switchToSlide(nextSlideIndex);
}

// Установите начальное состояние, чтобы первый слайд был активным
updateSlideDisplay();
updateRadioLabels();

// Запустите автоматическую смену слайдов
resetAutoSlideTimer();



document.addEventListener("DOMContentLoaded", function () {
    let burgerButton = document.querySelector(".header_mob_burger");
    let menu = document.querySelector(".header_mob_menu");
    let closeButton = document.querySelector(".close_menu_btn");

    burgerButton.addEventListener("click", function () {
        menu.classList.toggle("show"); // Переключение класса для открытия и закрытия меню
    });

    closeButton.addEventListener("click", function () {
        menu.classList.remove("show"); // Закрыть меню при клике на кнопку "Закрыть"
    });
});
