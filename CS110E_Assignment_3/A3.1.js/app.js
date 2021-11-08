function prime(i) {
    let counterbetween; // 1-ic a-i sqrt amen mi tiv
    let c = Math.sqrt(i);
    let primecheck2 = c;

    let primecheckbetween; // boolean
    console.log(primecheck2);

    if (i == 1 || i == 0) {
            primecheckbetween = false;
        }

    for (counterbetween = 2; counterbetween <= primecheck2; counterbetween++) {
        if ((i % counterbetween) === 0) {
            primecheckbetween = false; // sxala - prime chi a-n
            counterbetween = primecheck2 + 1;
        } else if ((i % counterbetween) != 0) {
            primecheckbetween = true;  //chishta - prime-a a-n
        }
        console.log((i % counterbetween)); // amen angam stuguma mnacordy
        console.log(primecheckbetween + '\n'); //amen angam stuguma prime-a te che
    }


    if (primecheckbetween == true) {
        return true;
    } else {
        return false;
    }
}


console.log(prime(53));

function primes(a, b) {
    let sum = 0;
    let result = 0;
    for (let primefinder = a; primefinder < b; primefinder++) {
        if (prime(primefinder) === true) {
            sum += primefinder;
        }
    }
        return sum;
}
console.log(primes(7, 53) );