const ASSIGNMENTS_DATA = new Array(44).fill();

function load_assignments() {
    const ul = document.getElementById("assignments_list");
    (ASSIGNMENTS_DATA || []).map((_, index) => {
        const num = index + 1;
        const _li = document.createElement("li");
        const _a = document.createElement("a");
        _a.href = `assignment_${num}?num=${num}`
        _a.textContent = `Assignment# ${num}`;
        _li.appendChild(_a);
        ul.appendChild(_li);
    })
}
load_assignments();

// console.log('ASSIGNMENTS_DATA', ASSIGNMENTS_DATA);