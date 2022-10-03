const message = document.getElementById("message");
const trim = document.getElementById("trim");
const famous_person = `  <pre>\tJohn \nJohnson</pre>  `;
console.log(famous_person);
message.innerHTML = `${famous_person}`;
trim.addEventListener('click', function (ev) {
    ev.preventDefault();
    message.innerHTML = `${famous_person}`.replace(/\n|\t/g, "").trim();
})