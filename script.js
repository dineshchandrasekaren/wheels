const wheels = document.querySelectorAll(".wheel-details");
const next = document.getElementById('next');
const prev = document.getElementById('prev');

console.log(wheels);
let i = 0;
prev.disabled = true;
next.addEventListener('click', () => {

    i += 1;
    removeClassNames();
    wheels[i].classList.add('active');
    if (i === 2) {
        next.disabled = true;
       
    }
    if (i > 0) {
        prev.disabled = false;
    }
});
prev.addEventListener('click', () => {

    i -= 1;
    removeClassNames();
    wheels[i].classList.add('active');
    if (i ===0) {
        prev.disabled = true;

    }
    if (i <= 2) {
        next.disabled = false;
    }
});

function removeClassNames() {

    wheels.forEach((wheel) => {
        wheel.classList.remove('active');
    })
}