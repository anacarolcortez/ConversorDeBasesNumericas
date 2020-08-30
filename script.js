//falta habilitar operação com teclado virtual
const inputDecimal = document.getElementById('dec');
const inputHexadecimal = document.getElementById('hex');
const inputBinario = document.getElementById('bin');

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
        cBinario(numero);
    }
})

function cBinario(numero) {
    const vetorDecimais = [];
    const baseDois = [];

    const vetorNumero = Array.from(String(numero), Number);

    vetorNumero.map(function(n) { return n == 1 || n == 0 ? n : location.reload()})

    const vNumero = vetorNumero.reverse();

    for (x = 0; x < vNumero.length; x++) {
        baseDois[x] = Math.pow(2, x);
        if (vNumero[x] !== 0){
            vetorDecimais.push(baseDois[x]);
        }
    }

    const res  = vetorDecimais.reduce(function(sum, next){
        return sum + next;
    });

    inputDecimal.value = res;

    cDecimalHexadecimal(res);

}
