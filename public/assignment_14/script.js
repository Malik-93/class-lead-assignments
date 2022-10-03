const names = [{ name: 'Mubashir', is_available: true }, { name: 'Aftab', is_available: true }, { name: 'Hassan', is_available: true }];
const availalbe_guests = document.getElementById("availalbe_guest");
const start_button = document.getElementById("start_button");
const end_button = document.getElementById("end_button");
const middle_button = document.getElementById("middle_button");
const input = document.getElementById("guest");
function printList(data = []) {
    (data || []).map((guest, index) => {
        const li = document.createElement('li');
        li.textContent = `Hi ${guest.name}! I would like to invite you on a dinner.`;
        availalbe_guests.appendChild(li)
    })
}
printList(names);
start_button.addEventListener('click', function (ev) {
    ev.preventDefault();
    const li = document.createElement('li');
    li.textContent = `Hi ${input.value}! I would like to invite you on a dinner.`;
    availalbe_guests.insertBefore(li, availalbe_guests.childNodes[0]);
    input.value = ''
})
middle_button.addEventListener('click', function (ev) {
    ev.preventDefault();
    const li = document.createElement('li');
    li.textContent = `Hi ${input.value}! I would like to invite you on a dinner.`;
    availalbe_guests.insertBefore(li, availalbe_guests.childNodes[Math.floor(availalbe_guests.childNodes.length / 2)]);
    input.value = ''
})
end_button.addEventListener('click', function (ev) {
    ev.preventDefault();
    const li = document.createElement('li');
    li.textContent = `Hi ${input.value}! I would like to invite you on a dinner.`;
    availalbe_guests.append(li);
    input.value = ''
})