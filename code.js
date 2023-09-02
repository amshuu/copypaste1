const codeButton = document.getElementById('codeButton');
const decodeButton = document.getElementById('decodeButton');
const codeInterface = document.getElementById('codeInterface');
const decodeInterface = document.getElementById('decodeInterface');
const dataToCodeTextarea = document.getElementById('dataToCode');
const generateCodeButton = document.getElementById('generateCode');
const generatedCodeDiv = document.getElementById('generatedCode');
const codeToDecodeInput = document.getElementById('codeToDecode');
const decodeDataButton = document.getElementById('decodeData');
const decodedResultDiv = document.getElementById('decodedResult');

// Simulated data store
const dataStore = {};

codeButton.addEventListener('click', function () {
    codeInterface.style.display = 'block';
    decodeInterface.style.display = 'none';
});

decodeButton.addEventListener('click', function () {
    decodeInterface.style.display = 'block';
    codeInterface.style.display = 'none';
});

generateCodeButton.addEventListener('click', function () {
    // Generate a random code (for simplicity, we use a random number here)
    const randomCode = Math.floor(Math.random() * 10000);
    
    // Store the data and code in the dataStore object
    const data = dataToCodeTextarea.value;
    dataStore[randomCode] = data;

    // Display the generated code to the user with a copy button
    generatedCodeDiv.innerHTML = `Generated Code: ${randomCode} <button id="copyCode">Copy</button>`;
    
    // Clear the textarea
    dataToCodeTextarea.value = '';

    // Add event listener for the copy button
    const copyCodeButton = document.getElementById('copyCode');
    copyCodeButton.addEventListener('click', function () {
        // Copy the code to the clipboard
        const codeToCopy = randomCode.toString();
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = codeToCopy;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Provide a visual indication that the code was copied
        copyCodeButton.textContent = 'Copied!';
        setTimeout(() => {
            copyCodeButton.textContent = 'Copy';
        }, 2000); // Reset after 2 seconds
    });
});

decodeDataButton.addEventListener('click', function () {
    // Retrieve the code entered by the user
    const enteredCode = codeToDecodeInput.value;
    
    // Attempt to fetch the corresponding data from the dataStore
    const retrievedData = dataStore[enteredCode];

    if (retrievedData !== undefined) {
        // Display the retrieved data
        decodedResultDiv.textContent = `Decoded Data: ${retrievedData}`;
    } else {
        // Handle the case where the code is not found
        decodedResultDiv.textContent = 'Code not found';
    }
});
