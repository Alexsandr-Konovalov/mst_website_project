function submitForm() {
  // Собираем данные из формы
  var formData = new FormData(document.getElementById("quizForm"));

  // Преобразуем данные в строку для отправки
  var dataString = new URLSearchParams(formData).toString();

  // Отправляем данные на сервер
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "process.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(dataString);

  // Обработка ответа от сервера (можно добавить логику обработки)
  xhr.onload = function () {
      if (xhr.status === 200) {
          alert("Данные успешно отправлены!");
      } else {
          alert("Произошла ошибка при отправке данных.");
      }
  };
}
