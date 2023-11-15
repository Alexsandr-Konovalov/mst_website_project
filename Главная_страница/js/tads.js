// Функция для открытия вкладок
function openTab(evt, tabName) {
    // Объявляем переменные
    var i, tabcontent, tablinks;

    // Делаем первую вкладку активной по умолчанию
    document.getElementById("defaultOpen").click();
    // Получаем все элементы с классом "tabcontent" и скрываем их
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Получаем все элементы с классом "tablinks" и удаляем у них класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Отображаем текущую вкладку и добавляем класс "active" для кнопки
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}