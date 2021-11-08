function backwards (a) {
    let text = "";
    for (let i = a.length - 1; i >= 0; i--) {
        text += a[i];
    }
    return text;
}
console.log(backwards("Albert"));

function palindrome(b) {
    let text = b.length;
    const textright = backwards(b);
    let check;
   
    for (let x = 0; x < ((text) / 2); x++) {
        if (b[x] === textright[x]) {
            check = true;
            console.log(check + " " + b[x] + " " + textright[x]);
        } else {
            check = false;
            x = (text / 2) + 1;
            console.log(check + " " + b[x] + " " + textright[x]);
        }   
    }
    if (check !== true) {
            return false;
        }
        else {
            return true;
        }
}
console.log(palindrome("aboobaabooba"));