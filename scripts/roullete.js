document.addEventListener("DOMContentLoaded", function() {
    const girarButton = document.querySelector('#spinbutton');
    const rouletteCheckbox = document.querySelector('#compsoul-roulette-checkbox');

    girarButton.addEventListener('click', function() {
        // Check the checkbox to start the animation
        rouletteCheckbox.checked = !rouletteCheckbox.checked; // Toggle the checkbox state
        girarButton.innerHTML = rouletteCheckbox.checked ? "Parar" : "Girar"; // Ternary operator to switch text
    });
});


