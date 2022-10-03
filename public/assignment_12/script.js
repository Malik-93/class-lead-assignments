const names = ['Mubashir', 'Aftab', 'Hassan'];
const ul = document.getElementById("list");
(names || []).map((name, index) => {
    const li = document.createElement('li');
    li.textContent = `Hi ${name}! I would like to invite you on a dinner.`;
    ul.appendChild(li)
})
