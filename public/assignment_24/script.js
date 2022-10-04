const GREEN = 'green',
    YELLOW = 'yellow',
    RED = 'red';
const input = document.getElementById("color");
const form = document.getElementById("form");
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const value = `${input.value}`;
    if (value === GREEN) {
        show_snack('player just earned 5 points for shooting the alien');
    }
    else show_snack('player just earned 10 points for shooting the alien');
})

function show_snack(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    x.textContent = `${message}`
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

