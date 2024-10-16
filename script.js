let chart;

// Функция для смены режима калькулятора
function changeMode() {
    const mode = document.getElementById("mode").value;
    const calculators = document.querySelectorAll(".calculator");
    calculators.forEach(calc => calc.classList.remove("active"));
    document.getElementById(mode).classList.add("active");
}

// Функция для расчета обычного калькулятора
function calculateBasic() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operation = document.getElementById("operation").value;
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    document.getElementById("basicResult").innerText = "Результат: " + result;
    animateResult("basicResult");
}

// Функция для расчета дробей
function calculateFraction() {
    const fraction1 = document.getElementById("fraction1").value.split('/');
    const fraction2 = document.getElementById("fraction2").value.split('/');
    const operation = document.getElementById("fractionOperation").value;

    const num1 = parseInt(fraction1[0]);
    const den1 = parseInt(fraction1[1]);
    const num2 = parseInt(fraction2[0]);
    const den2 = parseInt(fraction2[1]);

    let resultNum, resultDen;

    switch (operation) {
        case "+":
            resultNum = (num1 * den2) + (num2 * den1);
            resultDen = den1 * den2;
            break;
        case "-":
            resultNum = (num1 * den2) - (num2 * den1);
            resultDen = den1 * den2;
            break;
        case "*":
            resultNum = num1 * num2;
            resultDen = den1 * den2;
            break;
        case "/":
            resultNum = num1 * den2;
            resultDen = den1 * num2;
            break;
    }
    document.getElementById("fractionResult").innerText = "Результат: " + resultNum + '/' + resultDen;
    animateResult("fractionResult");
}

// Функция для расчета тригонометрии
function calculateTrigonometry() {
    const angle = parseFloat(document.getElementById("angle").value);
    const operation = document.getElementById("trigOperation").value;
    let result;

    switch (operation) {
        case "sin":
            result = Math.sin(angle * Math.PI / 180);
            break;
        case "cos":
            result = Math.cos(angle * Math.PI / 180);
            break;
        case "tan":
            result = Math.tan(angle * Math.PI / 180);
            break;
    }
    document.getElementById("trigResult").innerText = "Результат: " + result;
    animateResult("trigResult");
}

// Функция для рисования графика
function drawGraph() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const functionInput = document.getElementById('functionInput').value;
    const data = [];
    const labels = [];

    for (let x = -10; x <= 10; x += 0.1) {
        const y = eval(functionInput.replace(/x/g, x));
        data.push(y);
        labels.push(x);
    }

    if (chart) {
        chart.destroy(); // Уничтожаем предыдущий график, если есть
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: functionInput,
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                }
            }
        }
    });
}

// Функция для рисования точки на графике
function plotPoint() {
    const x = parseFloat(document.getElementById("xCoord").value);
    const y = parseFloat(document.getElementById("yCoord").value);

    if (chart) {
        chart.data.datasets.push({
            label: `Точка (${x}, ${y})`,
            data: [{ x: x, y: y }],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            showLine: false
        });
        chart.update();
    }
}

// Анимация результата
function animateResult(resultId) {
    const resultElement = document.getElementById(resultId);
    resultElement.classList.add('animate');
    setTimeout(() => {
        resultElement.classList.remove('animate');
    }, 1000);
}
