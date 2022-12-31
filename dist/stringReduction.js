"use strict";
function StringReduction(str) {
    let array = str.split("");
    // code goes here 
    let i = 0;
    do {
        let currentSubstring = array.slice(i, i + 2).join('');
        if (currentSubstring === "ab" || currentSubstring === "ba") {
            array.splice(i, 2, "c");
            i = 0;
        }
        else if (currentSubstring === 'ac' || currentSubstring === 'ca') {
            array.splice(i, 2, 'b');
            i = 0;
        }
        else if (currentSubstring === 'bc' || currentSubstring === 'cb') {
            array.splice(i, 2, 'a');
            i = 0;
        }
        else {
            i++;
        }
    } while (array.length > i);
    {
        array.length;
    }
    return array.length;
}
// function StringReduction(str: string) {
//     let array: string[] = str.split("");
//     // code goes here 
//     for (let i = 0; i < array.length; i++) {
//         let currentSubstring: string = array.slice(i, i + 2).join('')
//         if (currentSubstring === "ab" || currentSubstring === "ba") {
//             console.log("ab or ba ", currentSubstring);
//             array.splice(i, 2, "c");
//         } else if (currentSubstring === 'ac' || currentSubstring === 'ca') {
//             console.log("ac or ca", currentSubstring);
//             array.splice(i, 2, 'b');
//         } else if (currentSubstring === 'bc' || currentSubstring === 'cb') {
//             console.log("bc or cb ", currentSubstring);
//             array.splice(i, 2, 'a');
//         } else {
//             array.length
//         }
//     }
//     return array.length;
// }
console.log(StringReduction("abcabc"));
