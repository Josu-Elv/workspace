// 17.Define a function capitalize_last_name() that accepts as argument
// a string with a (single) first and a (single) last name, and returns a
// string in which only the first letter of the first name is uppercase,
// whereas all letters of the last name are uppercase; in otherwords,
// 'marisa tomei' becomes 'Marisa TOMEI'. (Tip: use str.split() to split
// a str into separate words.) 
// If something other than a str object is passed as an argument, the function should raise a TypeError. (Tip:you can use isIstanceOf()
// to check whether an object is of a particular type.) 
// If the str does not consist of exactly two words, the function should raise a ValueError.

const readline = require('readline');

class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValueError';
    }
}

function capitalize_last_name(fullName) {
    if (typeof fullName !== 'string') {
        throw new TypeError();
    }

    let checkName = fullName.trim().split(/\s+/);

    const regex = /[\d!@#$%^&*(),.?":{}|<>]/;
    if (regex.test(checkName[0]) || regex.test(checkName[1])) {
        throw new TypeError();
    }

    if (checkName.length !== 2) {
        throw new ValueError();
    }

    let firstName = checkName[0].charAt(0).toUpperCase() + checkName[0].substring(1).toLowerCase();
    let lastName = checkName[1].toUpperCase();

    return firstName + ' ' + lastName;
}


if (require.main === module) {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please write your full name (first and last): ', (input) => {
    try {
        const result = capitalize_last_name(input);
        console.log(`Capitalized Name: ${result}`);
    } catch (e) {
        console.error(e.name);      
    } finally {
        rl.close(); 
    }
});
}

module.exports = {
    ValueError,   
    capitalize_last_name,
};