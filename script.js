//falta habilitar operação com teclado virtual
const inputDecimal = document.getElementById('dec');
const inputHexadecimal = document.getElementById('hex');
const inputBinario = document.getElementById('bin');
const vetorDecimais = [];

inputDecimal.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        numero = this.value;
        console.log(numero);
        cDecimalBinario(numero);
        cDecimalHexadecimal(numero);
    }
})

function cDecimalBinario(num) {
    const vetorBinarios = [];

    while (num != 0) {
        let resp = num%2 == 0 ? 0 : 1;
        vetorBinarios.push(resp);
        num = Math.floor(num/2);
    }
    const resultado = vetorBinarios.reverse().join('');
    inputBinario.value = resultado;
}

function cDecimalHexadecimal(num) {
    const vetorHexadecimais = [];

    while (num > 16) {
        let resp = num%16;       
        vetorHexadecimais.push(resp);
        num = Math.floor(num/16);
    }
    vetorHexadecimais.push(num);
    
    comLetras = vetorHexadecimais.map(function(digito) { return digito == 10 ? 'A' : digito; })
                        .map(function(digito) { return digito == 11 ? 'B' : digito; })
                        .map(function(digito) { return digito == 12 ? 'C' : digito; })
                        .map(function(digito) { return digito == 13 ? 'D' : digito; })
                        .map(function(digito) { return digito == 14 ? 'E' : digito; })
                        .map(function(digito) { return digito == 15 ? 'F' : digito; });
    
    const resultado = comLetras.reverse().join('');
    inputHexadecimal.value = resultado;
}

inputHexadecimal.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        numero = this.value;
        cHexadecimalDecimal(numero);
        cHexadecimalBinario(numero);
    }
})

function cHexadecimalDecimal(numero) {
    console.log(numero);
}

function cHexadecimalBinario(numero) {
    console.log(numero);
}

inputBinario.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        numero = this.value;
        cBinarioDecimal(numero);
        cBinarioHexadecimal(numero);
    }
})

function cBinarioDecimal(numero) {
    console.log(numero);
}

function cBinarioHexadecimal(numero) {
    console.log(numero);
}