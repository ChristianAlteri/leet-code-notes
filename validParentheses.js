// WORKS ON LEET UPTO 74TH CASE {[]} IT CANT HANDLE THAT

let isValid = function(s) {


    newString = s.split(/\(\)|\[\]|\{\}/);
    const filteredNewString = newString.filter(item => item !== "");  
    console.log(newString);
    if (filteredNewString.length === 0) {
        return true
    }
        return false

};


// console.log(isValid('()[]{'));

let isValid2 = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const lastOpened = stack.pop();
            if (pairs[lastOpened] !== char) {
                return false;
            }
        }
    }
    // console.log(stack);

    return stack.length === 0;
};

console.log(isValid2('({[()]})')); 
