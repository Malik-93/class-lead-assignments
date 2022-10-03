const form = document.getElementById("form");
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = document.getElementById("name");
    const subject = document.getElementById("subject");
    const p_message = document.getElementById("message");
    p_message.innerHTML = `Hello ${name.value}, would you like to learn some ${subject.value} today?`
})
