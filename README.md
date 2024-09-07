<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repeated Addition Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Repeated Addition Generator</h1>
        <button id="generate">Generate Sentence</button>
        <button id="reveal" style="display:none;">Reveal Answer</button>
        <p id="addition-sentence"></p>
        <p id="multiplication-equation"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

p {
    font-size: 18px;
    margin: 10px 0;
}
let number, times;  // Declare variables to store number and times

document.getElementById('generate').addEventListener('click', generateSentence);
document.getElementById('reveal').addEventListener('click', revealAnswer);

function generateSentence() {
    // Define range for the numbers
    const numberRange = [1, 10];
    
    // Generate random numbers
    number = getRandomInt(numberRange[0], numberRange[1]);
    times = getRandomInt(2, 10); // Ensures at least two repetitions

    // Create the repeated addition sentence
    const additionSentence = Array(times).fill(number).join(' + ');

    // Hide the reveal button and equation initially
    document.getElementById('reveal').style.display = 'inline-block';
    document.getElementById('multiplication-equation').style.display = 'none';

    // Display the repeated addition sentence
    document.getElementById('addition-sentence').innerText = `Repeated Addition Sentence: ${additionSentence}`;
}

function revealAnswer() {
    // Create the corresponding multiplication equation
    const multiplicationEquation = `${number} * ${times}`;

    // Display the multiplication equation
    document.getElementById('multiplication-equation').innerText = `Multiplication Equation: ${multiplicationEquation}`;
    document.getElementById('multiplication-equation').style.display = 'block';
    
    // Hide the reveal button after revealing the answer
    document.getElementById('reveal').style.display = 'none';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
