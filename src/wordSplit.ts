function WordSplit(strArr: string[]) {

    // code goes here  
    const firstSubword: string = strArr[0];
    const secondSubword: string[] = strArr[1].split(",");

    let splitedWord: string = "";

    secondSubword.forEach((firstWord: string) => {

        let splitMainWordArray = firstSubword.split(firstWord)

        if (splitMainWordArray.length > 0) {

            splitMainWordArray.forEach((word: string) => {

                let joinedWord: string = firstWord + word;

                let reversedWord: string = [joinedWord].reverse().toString()

                console.log({ reversedWord });

                if (joinedWord === firstSubword || reversedWord === firstSubword) {
                    splitedWord = "" + firstWord + "," + word + ""
                } else {
                    return 'Not Possible'
                }

            })
        }
    })

    return splitedWord;

}

console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]))