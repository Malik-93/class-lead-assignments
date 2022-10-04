
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const APPLE = 'apple',
    BANANA = 'banana',
    GRAPS = 'graps';
const favorite_fruits = [APPLE, BANANA, GRAPS]
const input = document.getElementById("fruite");
const form = document.getElementById("form");
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const value = `${input.value}`.toLowerCase();
    const fruite_index = favorite_fruits.indexOf(value);
    if (fruite_index >= 0) {
        show_snack(`You really like ${favorite_fruits[fruite_index]}`)
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

