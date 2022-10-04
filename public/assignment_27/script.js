
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
const ADMIN = 'admin';
let usernames = ['Mudassir', ADMIN, 'Adeel', 'Ali', 'Usama'];
const users_list = document.getElementById("users_list");
const remove_button = document.getElementById('remove_button');
function printList(data = []) {
    (data || []).map((guest, index) => {
        const li = document.createElement('li');
        li.textContent = `Hi ${guest}!`;
        users_list.appendChild(li)
    })
}
printList(usernames);

remove_button.addEventListener('click', () => {
    usernames = [];
    users_list.innerHTML = '';
    if (!usernames.length) {
        show_snack(`We need to find more users`)
    }
})

function show_snack(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    x.textContent = `${message}`
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}