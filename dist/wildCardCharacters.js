"use strict";
function wildCardCharacters(str) {
    // code goes here
    let cardCharactersArray = str.split(" ");
    const patternReader = (pattern) => {
        let capture = 1;
        const source = pattern
            .replace(/([+*$])(?:\{(\d+)\})?/g, (match, rule, repeat = 3) => {
            switch (rule) {
                case "+":
                    return "[a-z]";
                case "*":
                    return `(.)\\${capture++}{${repeat - 1}}`;
                case "$":
                    return "\\d";
            }
        })
            .replace(/(.+?)\1+/g, (match, capture) => {
            const rle = `(?:${capture}){${match.length / capture.length}}`;
            return rle.length < match.length ? rle : match;
        });
        return new RegExp(`^${source}$`);
    };
    const compare = (pattern, input) => {
        return patternReader(pattern).test(input);
    };
    return compare(cardCharactersArray[0], cardCharactersArray[1]);
}
console.log(wildCardCharacters("+++++* abcdemmmmmm"));
console.log(wildCardCharacters("**+*{2} mmmrrrkbb"));
