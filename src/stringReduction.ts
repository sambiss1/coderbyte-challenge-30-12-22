function StringReduction(str: string) {

    let array: string[] = str.split("");
    let replacedString: string = ""
    // code goes here  
    for (let i = 0; i < array.length - 1; i++) {
        let currentSubstring: string = array.slice(i, i + 2).join('')

        console.log(currentSubstring);
        if (currentSubstring === 'ab' || currentSubstring === 'ba') {
            array.splice(i, 2, 'c');
        } else if (currentSubstring === 'ac' || currentSubstring === 'ca') {
            array.splice(i, 2, 'b');
        } else if (currentSubstring === 'bc' || currentSubstring === 'cb') {
            array.splice(i, 2, 'a');
        }
    }

    return array.length;


}

console.log(StringReduction("abcabc"));