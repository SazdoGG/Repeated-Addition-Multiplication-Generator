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
