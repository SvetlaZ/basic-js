class VigenereCipheringMachine {
    constructor(direct) {
    this.direct = direct === false ? false : true;
}
    encrypt(str, key) {
    const abc_len = 97;
    const abc_count = 26;

    let res = '';
    let j = 0;

    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        if (letter.match(/[a-z]/)) {
            let key_letter = key[j].toLowerCase();
            let num = letter.charCodeAt() - abc_len + key_letter.charCodeAt() - abc_len;
            res+= String.fromCharCode((num % abc_count) + abc_len);

                if (j < key.length - 1) {
                j++;
                } else {
                j = 0;
                }
            
        } else {
        res+= letter;
        }
    }

    return this.direct ? res.toUpperCase() : res.toUpperCase().split('').reverse().join('');
    }

    decrypt(str, key) {
    const abc_len = 97;
    const abc_count = 26;

    let res = '';
    let j = 0;

    for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase()

    if (letter.match(/[a-z]/)) {
        let key_letter = key[j].toLowerCase();
        let num = letter.charCodeAt() - key_letter.charCodeAt();
    if (num < 0) {
        res+= String.fromCharCode(abc_len + abc_count + num);
    } else {
    res+= String.fromCharCode(num + abc_len);
    }

    if (j < key.length - 1) {
        j++;
    } else {
    j = 0;
    }
    } else {
    res+= letter;
        }
    }

        return this.direct ? res.toUpperCase() : res.toUpperCase().split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
