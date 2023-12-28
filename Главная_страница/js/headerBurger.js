
document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector(".header_mob_burger");
    let menu = document.querySelector(".header_mob_menu");
    let closeButton = document.querySelector(".close_menu_btn");
    const desktopBurgerButton = document.querySelector(".header_burger"); // Добавлен desktopBurgerButton

    burgerButton.addEventListener("click", function () {
        toggleMenu();
    });

    desktopBurgerButton.addEventListener("click", function () {
        toggleMenu();
    });

    closeButton.addEventListener("click", function () {
        closeMenu();
    });

    var spoilerTitles = document.querySelectorAll('.spoiler_title');

    spoilerTitles.forEach(function (spoilerTitle) {
        spoilerTitle.addEventListener('click', function () {
            toggleSpoiler(spoilerTitle);
        });
    });

    function toggleMenu() {
        menu.classList.toggle("show");

        resetAutoSlideTimer();
    }

    function closeMenu() {
        menu.classList.remove("show");
        resetAutoSlideTimer();
    }

    function toggleSpoiler(spoilerTitle) {
        var spoilerWrap = spoilerTitle.closest('.spoiler_wrap');
        var spoilerContent = spoilerWrap.querySelector('.spoiler_content');
        var spoilerArrow = spoilerWrap.querySelector('.spoiler_arrow');

        spoilerContent.classList.toggle('open');
        spoilerArrow.classList.toggle('open');
    }
});
