const transportations = ['I would like to own a Honda civic car.'];
const ul = document.getElementById("list");
(transportations || []).map((statement, index) => {
    const li = document.createElement('li');
    li.textContent = `${statement}`;
    ul.appendChild(li)
})
