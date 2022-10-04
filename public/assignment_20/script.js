const list = [{ name: 'Mudassir' }];
const error = document.getElementById("error");
const correct = document.getElementById("correct");
const data = document.getElementById("data");

// ERROR
error.addEventListener('click', function (ev, index = 1) {
    try {
        show_snack(list[index].name);
    } catch (error) {
        show_snack(`${error}`)
    } finally {
        data.innerHTML = ''
    }
})

// CORRECTION
correct.addEventListener('click', function (ev, index = 0) {
    try {
        show_snack(list[index].name);
        data.textContent = list[index].name
    } catch (error) {
        show_snack(`${error}`)
    }
})

function show_snack(message, id) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    x.textContent = `${message}`
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
