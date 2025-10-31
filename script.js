// Знаходимо кнопку за її id
const themeButton = document.getElementById('themeButton');

// Додаємо обробник події "клік" на кнопку
themeButton.addEventListener('click', function() {
    // Знаходимо body сторінки
    const body = document.body;
    
    // Перемикаємо тему
    if (body.classList.contains('dark-theme')) {
        // Якщо темна тема активна - повертаємо світлу
        body.classList.remove('dark-theme');
        themeButton.textContent = 'Змінити на темну тему';
    } else {
        // Якщо світла тема - вмикаємо темну
        body.classList.add('dark-theme');
        themeButton.textContent = 'Змінити на світлу тему';
    }
});