const names = [{ name: 'Mubashir', is_available: true }, { name: 'Aftab', is_available: true }, { name: 'Hassan', is_available: true }, { name: 'Mudassir', is_available: true }, { name: 'Ali', is_available: true }];
const availalbe_guests = document.getElementById("availalbe_guest");
const MAX_GUESTS = 2;
function printList(data = []) {
    (data || []).map((guest, index) => {
        const li = document.createElement('li');
        li.textContent = `Hi ${guest.name}! I would like to invite you on a dinner. `;
        li.id = `${guest.name}`
        const input = document.createElement("input");
        input.type = 'button'
        input.id = `remove_button`
        input.value = `x`;
        input.onclick = function () { remove_guest(index) }
        li.appendChild(input)
        availalbe_guests.appendChild(li)
    })
}
printList(names);
function remove_guest(index) {
    let remaining_guests = availalbe_guests.childNodes.length;
    if (remaining_guests > MAX_GUESTS) {
        show_snack(`Hi ${names[index].name}! We are sorry, we couldn't invite you!`, `show_${index}`)
        availalbe_guests.removeChild(availalbe_guests.childNodes[index]);
        remaining_guests--;
        if (remaining_guests <= 2) {
            for (let idx = 0; idx < remaining_guests; idx++) {
                document.getElementById(`remove_button`).remove();
                const user_name = `${availalbe_guests.childNodes[idx].textContent}`.split("!")[0];
                show_snack(`${user_name}! Enjoy your dinner`, `message_${idx}`)
            }
        }
    }
}
function show_snack(message, id) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    x.textContent = `${message}`
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}