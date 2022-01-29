let string = "hey";
let num = "3";
const repeatString = function(string, num) {
    let b = string;
    let a = "";
    for (let index = 0; index < num; index++) {
        a = a + b;    }
    return a;
};

// Do not edit below this line
module.exports = repeatString;