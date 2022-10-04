const names = [];
const input = document.getElementById("item");
const form = document.getElementById("form");
const items_list = document.getElementById("items_list");
function printList(data = []) {
    items_list.innerHTML = '';
    (data || []).map((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item}`;
        items_list.appendChild(li)
    })
}

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    names.push(`${input.value}`);
    input.value = '';
    printList(names)
    // alert(`${input.value} item added into list.`)
})
