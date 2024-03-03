let textoDigitando = "";
let texto = "Front-end Developer";
let i = 0;
const intervalo = setInterval(() => {
    if (i < texto.length) {
        textoDigitando += texto.charAt(i);
        document.getElementById("textoDigitando").innerText = textoDigitando;
        i++;
    } else {
        clearInterval(intervalo);
    }
}, 150);
