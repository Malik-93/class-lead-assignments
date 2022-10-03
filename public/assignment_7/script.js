const form = document.getElementById("form");
const name = document.getElementById("name");
const message = document.getElementById("message");
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    message.innerHTML = `Your favorite number is ${name.value}`
})

