const names = ['Mubashir', 'Aftab', 'Hassan'];
const ul = document.getElementById("list");
(names || []).map((name, index) => {
    const li = document.createElement('li');
    li.textContent = `${name}`;
    ul.appendChild(li)
})
