const button = document.getElementById('button');
const map = document.getElementById('map');

// Добавляем обработчик события 'click' на кнопку
button.addEventListener('click', function() {
    if (map.style.display === 'block') {
        map.style.display = 'none'; // Скрываем карту, если она уже открыта
    } else {
        map.style.display = 'block'; // Показываем карту, если она была скрыта
    }
});