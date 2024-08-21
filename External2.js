window.onload = function() {
    // Open a new window
    var newWindow = window.open('', '', 'width=300,height=200');

    // Write initial HTML to the new window
    newWindow.document.write('<!DOCTYPE html><html><head><title>Typewriter Effect</title></head><body>');
    newWindow.document.write('<div id="smallWindow" style="padding: 20px; background-color: white; border: 1px solid black;"></div>');
    newWindow.document.write('</body></html>');

    // Get the new window's document
    var newDoc = newWindow.document;

    // Function to type the text letter by letter
    var text = "Welcome to Js";
    var index = 0;

    function typeText() {
        if (index < text.length) {
            newDoc.getElementById('smallWindow').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the speed as necessary
        } else {
            setTimeout(closeWindow, 2000); // Wait 2 seconds before closing the window
        }
    }

    // Function to close the new window
    function closeWindow() {
        newWindow.close();
    }

    // Start typing the text
    typeText();
};
