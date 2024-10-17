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

    document.getElementById("fractionResult").innerText = `Результат: ${resultNum}/${resultDen}`;
    animateResult("fractionResult");
}

// Функция для расчета тригонометрических значений
function calculateTrigonometry() {
    const angle = parseFloat(document.getElementById("angle").value);
    const operation = document.getElementById("trigOperation").value;
    const radians = angle * (Math.PI / 180);
    let result;

    switch (operation) {
        case "sin":
            result = Math.sin(radians);
            break;
        case "cos":
            result = Math.cos(radians);
            break;
        case "tan":
            result = Math.tan(radians);
            break;
    }

    document.getElementById("trigResult").innerText = "Результат: " + result;
    animateResult("trigResult");
}

// Функция для рисования графиков
function drawGraph() {
    const functionInput = document.getElementById("functionInput").value;
    const ctx = document.getElementById("myChart").getContext("2d");

    const data = {
        labels: [],
        datasets: [{
            label: 'График',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
            tension: 0.1
        }]
    };

    for (let x = -10; x <= 10; x += 0.1) {
        const y = eval(functionInput.replace(/x/g, x));
        data.labels.push(x);
        data.datasets[0].data.push(y);
    }

    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: { type: 'linear', position: 'bottom' },
                y: { beginAtZero: true }
            }
        }
    });
}

// Функция для рисования точки на графике
function plotPoint() {
    const xCoord = parseFloat(document.getElementById("xCoord").value);
    const yCoord = parseFloat(document.getElementById("yCoord").value);
    const ctx = document.getElementById("myChart").getContext("2d");
    ctx.fillStyle = 'red';
    ctx.fillRect(xCoord * 10 + 150, 150 - yCoord * 10, 5, 5); // координаты для отображения
}
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class Calculator extends Application {
    
    private TextField input1;
    private TextField input2;
    private Label resultLabel;
    
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Калькулятор");

        input1 = new TextField();
        input1.setPromptText("Введите первое число");

        input2 = new TextField();
        input2.setPromptText("Введите второе число");

        ComboBox<String> operation = new ComboBox<>();
        operation.getItems().addAll("+", "-", "*", "/");
        operation.setValue("+");

        Button calculateButton = new Button("Рассчитать");
        calculateButton.setOnAction(e -> calculate(operation.getValue()));

        resultLabel = new Label("Результат: ");

        VBox vbox = new VBox(10, input1, operation, input2, calculateButton, resultLabel);
        Scene scene = new Scene(vbox, 300, 200);

        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private void calculate(String operation) {
        double num1 = Double.parseDouble(input1.getText());
        double num2 = Double.parseDouble(input2.getText());
        double result = 0;

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
        
        resultLabel.setText("Результат: " + result);
    }
}
