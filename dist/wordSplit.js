"use strict";
function WordSplit(strArr) {
    // code goes here  
    const firstSubword = strArr[0];
    const secondSubword = strArr[1].split(",");
    let splitedWord = "";
    secondSubword.forEach((firstWord) => {
        let splitMainWordArray = firstSubword.split(firstWord);
        if (splitMainWordArray.length > 0) {
            splitMainWordArray.forEach((word) => {
                let joinedWord = firstWord + word;
                // console.log({joinedWord});
                let reversedWord = [joinedWord].reverse().toString();
                console.log({ reversedWord });
                if (joinedWord === firstSubword || reversedWord === firstSubword) {
                    splitedWord = "" + firstWord + "," + word + "";
                }
                else {
                    return 'Not Possible';
                }
            });
        }
    });
    return splitedWord;
}
console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]));
