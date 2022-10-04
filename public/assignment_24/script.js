// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

const YEAR_2 = 2;
const YEAR_4 = 4;
const YEAR_13 = 13;
const YEAR_20 = 20;
const YEAR_65 = 65;
const input = document.getElementById("age");
const form = document.getElementById("form");
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const value = `${input.value}`;
    if (value < YEAR_2) {
        show_snack('The Person is a baby');
    }
    else if (YEAR_2 <= value && value < YEAR_4) {
        show_snack('The person is a toddler');
    }
    else if (YEAR_4 <= value && value < YEAR_13) {
        show_snack('The person is a kid');
    }
    else if (YEAR_13 <= value && value < YEAR_20) {
        show_snack('The person is a teenager');
    }
    else if (YEAR_20 <= value && value < YEAR_65) {
        show_snack('The person is a adult');
    }
    else if (value >= YEAR_65) {
        show_snack('The person is a elder');
    }
    input.value = '';

})

function show_snack(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    x.textContent = `${message}`
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

