const items = [];
const input = document.getElementById("item");
const form = document.getElementById("form");
const items_list = document.getElementById("items_list");
var table_body = document.getElementById('table_body');
function printList(data = []) {
    table_body.innerHTML = '';
    (data || []).map((item, index) => {
        let tr = document.createElement('tr');
        let item_id = document.createElement('td');
        let item_name = document.createElement('td');
        item_id.textContent = `${item.item_id}`
        item_name.textContent = `${item.item_name}`
        tr.appendChild(item_id);
        tr.appendChild(item_name);
        table_body.appendChild(tr)
    })
}

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    items.push({ item_id: items.length + 1, item_name: `${input.value}` });
    input.value = '';
    printList(items)
    // alert(`${input.value} item added into list.`)
})
