function calculate(value) {
    const resultElement = document.getElementById('result');
    // Ваш код для расчета...
    
    // Пример обновления результата
    resultElement.value = value; // Обновление поля результата

    // Анимация результата
    animateResult();
}

function animateResult() {
    const resultElement = document.getElementById('result');
    resultElement.classList.add('animate');

    setTimeout(() => {
        resultElement.classList.remove('animate');
    }, 500);
}

// Добавьте остальные функции и логику калькулятора

