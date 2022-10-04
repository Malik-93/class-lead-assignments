let places = [{ name: 'UAE' }, { name: 'Austrailia' }, { name: 'Qatar' }, { name: 'London' }, { name: 'Italy' }];
const places_list = document.getElementById("places_list");

const alphabetical = document.getElementById("alphabetical");
const original = document.getElementById("original");

const reverse_alphabetica = document.getElementById("reverse_alphabetica");
const reverse = document.getElementById("reverse");
const original_reverse = document.getElementById("original_reverse");

const sort = document.getElementById("sort");
const reverse_alpha_sort = document.getElementById("reverse_alpha_sort");

function printList(data = []) {
    (data || []).map((place, index) => {
        const li = document.createElement('li');
        li.textContent = `${place.name}`;
        places_list.appendChild(li)
    })
}
//• Print your array in its original order.
printList(places);

// • Show that your array is still in its original order by printing it.
// • Show that your array is still in its original order by printing it.
// • Show that your array is still in its original order by printing it again.
original.addEventListener("click", function () {
    places_list.innerHTML = '';
    printList(places);
})

// • Print your array in alphabetical order without modifying the actual list.
alphabetical.addEventListener("click", function () {
    places_list.innerHTML = '';
    const copyData = [...places].sort((a, b) => a.name.localeCompare(b.name));
    printList(copyData);
})


reverse_alphabetica.addEventListener("click", function () {
    places_list.innerHTML = '';
    const copyData = [...places].sort((a, b) => b.name.localeCompare(a.name));
    printList(copyData);
})

// • Reverse the order of your list. Print the array to show that its order has changed.
reverse.addEventListener("click", function () {
    places_list.innerHTML = '';
    places = places.reverse();
    printList(places);
})

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
original_reverse.addEventListener("click", function () {
    places_list.innerHTML = '';
    places = places.reverse();
    printList(places);
})

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
sort.addEventListener("click", function () {
    places_list.innerHTML = '';
    places = places.sort((a, b) => a.name.localeCompare(b.name));
    printList(places);
})

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
reverse_alpha_sort.addEventListener("click", function () {
    places_list.innerHTML = '';
    places = places.sort((a, b) => b.name.localeCompare(a.name));
    printList(places);
})

