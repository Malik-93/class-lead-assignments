const names = ['Mubashir', 'Aftab', 'Hassan'];
const ul = document.getElementById("list");
(names || []).map((name, index) => {
    const li = document.createElement('li');
    li.textContent = `Hello ${name}! I hope you're doing very well.`;
    ul.appendChild(li)
})
