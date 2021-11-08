function prime(i) {
    let counterbetween; // 1-ic a-i sqrt amen mi tiv
    let c = Math.sqrt(i);
    let primecheck2 = c;

    let primecheckbetween; // boolean

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
    }


    if (primecheckbetween == true) {
        return true;
    } else {
        return false;
    }
}

console.log(prime(53));

function primes(a, b) {

    let sum = [];
    if (prime(a) === true && prime(b) === true) {
        for (let primefinder = b; primefinder > a; primefinder--) {
            if (prime(primefinder) === true) {
                sum.unshift(primefinder);
            }
        }
    } else { console.log("insert only primes"); }
    sum.unshift(a);
    return sum;
}
console.log(primes(7, 23));