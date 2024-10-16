// CSS анимация (добавить в стилевую часть HTML)
const style = document.createElement('style');
style.textContent = `
    .animate {
        animation: bounce 0.5s ease-in-out;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;
document.head.append(style);

// Функция для добавления анимации к результату
function animateResult(resultId) {
    const resultElement = document.getElementById(resultId);
    resultElement.classList.add('animate');
    setTimeout(() => {
        resultElement.classList.remove('animate');
    }, 500); // Время анимации должно совпадать с duration в CSS
}
