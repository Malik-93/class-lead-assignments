const form = document.getElementById("form");
const lowercase_button = document.getElementById("lowercase");
const uppercase_button = document.getElementById("uppercase");
const titlecase_button = document.getElementById("titlecase");
const name = document.getElementById("name");
const p_message = document.getElementById("message");
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    p_message.innerHTML = `${name.value}`
})
lowercase_button.addEventListener('click', function (ev) {
    p_message.innerHTML = `${name.value}`.toLowerCase();
})

uppercase_button.addEventListener('click', function (ev) {
    p_message.innerHTML = `${name.value}`.toUpperCase();
})
titlecase_button.addEventListener('click', function (ev) {
    p_message.innerHTML = `${name.value}`.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
})

