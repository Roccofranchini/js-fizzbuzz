/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



*/
var display = document.getElementById('display')
var list = [];
var number = 0;

for (var i = 0; i < 100; i++) {
    number += 1;

    if (number % 5 == 0 && number % 3 == 0) {
        list.push('FizzBuzz');
    }

    else if (number % 3 == 0) {
        list.push('Fizz');
    }

    else if (number % 5 == 0) {
        list.push('Buzz');
    }

    else {
        list.push(number);
    }

}

console.log(list);
display.innerHTML = (list);