const stringToPrint = "Welcome to my portfolio";
    let letterIndex = 0;
    let outputElement = document.getElementById('welcomediv');

    function printLetter() {
        if (letterIndex < stringToPrint.length) {
            outputElement.textContent += stringToPrint[letterIndex];
            letterIndex++;
        } else {
            // Reset the letter index to print the string again
            letterIndex = 0;
            outputElement.textContent = ''; // Clear the output element
        }
        
        setTimeout(printLetter, 200); // Adjust printing speed here (in milliseconds)
    }

    document.addEventListener('DOMContentLoaded', function() {
        printLetter();
    });