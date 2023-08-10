function StringReduction(str: string) {

    let array: string[] = str.split("");

    // code goes here 

    let i: number = 0;

    do {
        let currentSubstring: string = array.slice(i, i + 2).join('');

        if (currentSubstring === "ab" || currentSubstring === "ba") {
            array.splice(i, 2, "c");
            i = 0;
        } else if (currentSubstring === "ac" || currentSubstring === "ca") {
            array.splice(i, 2, "b");
            i = 0;
        } else if (currentSubstring === "bc" || currentSubstring === "cb") {
            array.splice(i, 2, "a");
            i = 0;
        } else {
            i++;
        }
    }
    while (array.length > i) {
        array.length
    }

    return array.length;


}




// }


console.log(StringReduction("abcabc"));
