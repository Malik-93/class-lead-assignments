const names = ['Mubashir', 'Aftab', 'Hassan'];
const ul = document.getElementById("list");
const message = document.getElementById("message");
(names || []).map((name, index) => {
    const li = document.createElement('li');
    li.textContent = `Hi ${name}! I would like to invite you on a dinner.`;
    ul.appendChild(li)
})

message.innerHTML = `<b>Message:</b> There are <b>${names.length}</b> people are invited to dinner. `