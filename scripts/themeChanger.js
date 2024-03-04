document.addEventListener('DOMContentLoaded', function () {
    // Check if a color is stored in local storage
    const savedColor = localStorage.getItem('textColor');

    // Apply the stored color or default to black
    document.body.style.color = savedColor || 'black';

    // Function to set and store the chosen color
    function setTextColor(color) {
        document.body.style.color = color;
        localStorage.setItem('textColor', color);
    }

    // Button event listeners
    document.getElementById('redBtn').addEventListener('click', function () {
        setTextColor('red');
    });

    document.getElementById('blueBtn').addEventListener('click', function () {
        setTextColor('blue');
    });

    document.getElementById('greenBtn').addEventListener('click', function () {
        setTextColor('green');
    });
    
    document.getElementById('whiteBtn').addEventListener('click', function () {
        setTextColor('white');
    });
    
    document.getElementById('blackBtn').addEventListener('click', function () {
        setTextColor('black');
    });
    
});
