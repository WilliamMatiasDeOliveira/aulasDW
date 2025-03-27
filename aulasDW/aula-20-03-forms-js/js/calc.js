const calculadora = document.getElementById('calculadora');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const somar = document.getElementById('somar');
const sub = document.getElementById('sub');
const dividir = document.getElementById('dividir');
const mult = document.getElementById('mult');

const res = document.getElementById('resultado');

calculadora.addEventListener('submit', function(event){
    event.preventDefault();

    num1 = input.value.trim();
    num2 = input.value.trim();

    somar.addEventListener('click', function(){
        const result = num1 + num2;
        res.textContent(result);

    });
    sub.addEventListener('click', function(){
        const result = num1 - num2;
        res.textContent(result);

    });
    dividir.addEventListener('click', function(){
        const result = num1 / num2;
        res.textContent(result);

    });
    mult.addEventListener('click', function(){
        const result = num1 * num2;
        res.textContent(result);

    });

   
});