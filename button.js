const clear = document.getElementById("del");
const equal = document.getElementById("equal");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const sevem = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");

clear.addEventListener('click', () => {
    location.reload();
})

one.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 1;
    };
    if (click == 2){
        inputHexadecimal.value += 1;
    };
    if (click == 3){
        inputBinario.value += 1;
    };
})

two.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 2;
    };
    if (click == 2){
        inputHexadecimal.value += 2;
    };
    if (click == 3){
        inputBinario.value += 2;
    };
})

three.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 3;
    };
    if (click == 2){
        inputHexadecimal.value += 3;
    };
    if (click == 3){
        inputBinario.value += 3;
    };
})

four.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 4;
    };
    if (click == 2){
        inputHexadecimal.value += 4;
    };
    if (click == 3){
        inputBinario.value += 4;
    };
})

five.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 5;
    };
    if (click == 2){
        inputHexadecimal.value += 5;
    };
    if (click == 3){
        inputBinario.value += 5;
    };
})

six.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 6;
    };
    if (click == 2){
        inputHexadecimal.value += 6;
    };
    if (click == 3){
        inputBinario.value += 6;
    };
})

seven.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 7;
    };
    if (click == 2){
        inputHexadecimal.value += 7;
    };
    if (click == 3){
        inputBinario.value += 7;
    };
})

eight.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 8;
    };
    if (click == 2){
        inputHexadecimal.value += 8;
    };
    if (click == 3){
        inputBinario.value += 8;
    };
})

nine.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 9;
    };
    if (click == 2){
        inputHexadecimal.value += 9;
    };
    if (click == 3){
        inputBinario.value += 9;
    };
})

zero.addEventListener('click', () => {
    if (click == 1){
        inputDecimal.value += 0;
    };
    if (click == 2){
        inputHexadecimal.value += 0;
    };
    if (click == 3){
        inputBinario.value += 0;
    };
})

a.addEventListener('click', () => {
    inputHexadecimal.value += 'A';
})

b.addEventListener('click', () => {
    inputHexadecimal.value += 'B';
})

c.addEventListener('click', () => {
    inputHexadecimal.value += 'C';
})

d.addEventListener('click', () => {
    inputHexadecimal.value += 'D';
})

e.addEventListener('click', () => {
    inputHexadecimal.value += 'E';
})

f.addEventListener('click', () => {
    inputHexadecimal.value += 'F';
})

//Do layout, falta apenas associar o botão ao evento de tecla enter dos inputs
equal.addEventListener('click', (event) => {
    event.key = 13;
    if (click == 1){
        
    };
    if (click == 2){
        inputHexadecimal.value += 0;
    };
    if (click == 3){
        inputBinario.value += 0;
    };
})