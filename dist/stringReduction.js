"use strict";
function StringReduction(str) {
    let array = str.split("");
    let replacedString = "";
    // code goes here  
    for (let i = 0; i < array.length - 1; i++) {
        let currentSubstring = array.slice(i, i + 2).join('');
        console.log(currentSubstring);
        if (currentSubstring === 'ab' || currentSubstring === 'ba') {
            array.splice(i, 2, 'c');
        }
        else if (currentSubstring === 'ac' || currentSubstring === 'ca') {
            array.splice(i, 2, 'b');
        }
        else if (currentSubstring === 'bc' || currentSubstring === 'cb') {
            array.splice(i, 2, 'a');
        }
    }
    return array.length;
}
console.log(StringReduction("abcabc"));
