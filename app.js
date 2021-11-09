function decToBinary(n) {
    let binaryNums = [];
    const char0 = "0";
    let bin = "";
    for (let i = 1; i <= 8; i++) {            //adding 8 int elements to array binaryNums 
        binaryNums.push(i);
    }
    let i = 0;
    while (n > 0) {                          //inserting the remainder of 2 into every element of the array, until the number is greater than 0
        binaryNums[i] = n % 2;  
        n = Math.floor(n / 2);
        i++;
    }
    for (let j = i - 1; j >= 0; j--) {
        bin += binaryNums[j];                //reverses the array of numbers and each element counted backwards is added into a String variable 
    }

    let byte = char0.repeat(8 - bin.length);   // adds as much zero-s from the beggining as needed to form a byte

    if (bin.length < 8) {                      // limiting bit amount in a byte               
          byte += bin;
    }

    console.log(byte);
    return byte;
}  

  decToBinary(16);


function inverse(a) {
    let inv = decToBinary(a);
    let text = "";
    for (let i = 0; i < inv.length; i++) {
        if (inv.charAt(i) == "0") {
             text+=1;
        } else if (inv.charAt(i) == "1") { text += 0;}
        
    } console.log(text);
}
inverse(16);



function add(a, b) {
    x = decToBinary(a);
    y = decToBinary(b);
    let z = [];
    for (let i = 7; i >= 0; i--) {
        if ((x.charAt(i) == "1" && y.charAt(i) == "1")) {
            for (let j = i - 1; j < 6; j++) {
                if ((x.charAt(j) == "0" && y.charAt(j) == "1") || (x.charAt(j) == "1" && y.charAt(j) == "0") || (x.charAt(j) == "1" && y.charAt(j) == "1")) {
                    x[j] = "0";
                    y[j] = "0";
                    if (x.charAt(j) == "0" && y.charAt(j) == "0") {
                        z.unshift(0);
                        if (z.length == 8) {
                            i = -1;
                        }
                    } else if (x.charAt(j) == "0" && y.charAt(j) == "0") {
                        x[j] = "1";
                        if ((x.charAt(j) == "0" && y.charAt(j) == "1") || (x.charAt(j) == "1" && y.charAt(j) == "0")) {
                            z.unshift(1);
                        } else if (x.charAt(j) == "0" && y.charAt(j) == "0") {
                            z.unshift(0);
                            if (z.length == 8) {
                                i = -1;
                            }
                        }
                    }
                }
            }
        } else if ((x.charAt(i) == "0" && y.charAt(i) == "1") || (x.charAt(i) == "1" && y.charAt(i) == "0")) {
            z.unshift(1);
        } else if (x.charAt(i) == "0" && y.charAt(i) == "0") {
            z.unshift(0);
            if (z.length == 8) {
                i = -1;
            }
        }
    } let text = "";
    text += z.join("");
    console.log(text);
}
    add(6, 9);
