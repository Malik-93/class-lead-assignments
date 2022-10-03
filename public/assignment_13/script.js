const names = [{ name: 'Mubashir', is_available: true }, { name: 'Aftab', is_available: true }, { name: 'Hassan', is_available: false }];
const availalbe_guests = document.getElementById("availalbe_guest");
const un_availalbe_guest = document.getElementById("un_availalbe_guest");
(names || []).map((guest, index) => {
    if (guest.is_available) {
        const li = document.createElement('li');
        li.textContent = `Hi ${guest.name}! I would like to invite you on a dinner.`;
        availalbe_guests.appendChild(li)
    } else {
        const li = document.createElement('li');
        li.textContent = `Hi ${guest.name}! Sorry to hear that you are not available.`;
        un_availalbe_guest.appendChild(li)
    }
})
