let i = 15;
while (i >10 ) {
    alert(i);
    i--
}

function isOdd () {
    for (let i = 0; i < 20; i++) {
        if (i % 2 !== 0)
            console.log (i)
    }
}
isOdd()

let i = 1
function primeNumbers () {
while (i > 0) {
    isPrime(i)
    i++
}
    for (let j = 0; j < 20; j++)
       isPrime(j)
    }
function isPrime (number) {
    let isPrime = true
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(number);
        }
    }
}
primeNumbers()
