const result = document.querySelector('#result');
const number = document.querySelectorAll('button');

number.forEach((num) => {
    num.addEventListener('click', () => {
        const id = num.getAttribute('id');
        const value = num.getAttribute('value');
        console.log(value, id);

        if (id == 'number') {
            result.value += value;
        } else if (id == 'symbol') {
            result.value += ` ${value} `;
        } else if (value == 'eval') {
            result.value = eval(result.value);
        } else if (id == 'reset') {
            result.value = '';
        }
    });
});

let a = 2.3;
let b = 3;

let c = a+b;
console.log(c);



// *first try
// const result = document.querySelector('#result');
// const reset = document.querySelector('#reset');
// const numbers = document.querySelector('#number');
// const number = numbers.querySelectorAll('div');
// const symbols = document.querySelector('#symbol');
// const symbol = symbols.querySelectorAll('div');

// reset.addEventListener('click', () => {
//     result.innerHTML = '';
// });

// number.forEach((num) => {
//     num.addEventListener('click', () => {
//         const value = num.getAttribute('data-number');
//         console.log(value);
//         result.innerHTML += value;
//     });
// });

// symbol.forEach((sym) => {
//     sym.addEventListener('click', () => {
//         const value = sym.getAttribute('value');
//         console.log(value);
//         result.innerHTML += ` ${value} `;
//     });
// });



