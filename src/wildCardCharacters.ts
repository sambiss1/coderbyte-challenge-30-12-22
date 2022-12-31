function wildCardCharacters(str: string) {
    // code goes here
    let cardCharactersArray = str.split(" ");
    const patternReader = (pattern: any) => {
        let capture = 1;
        const source = pattern
            .replace(/([+*$])(?:\{(\d+)\})?/g, (match: string[], rule: string, repeat = 3) => {
                switch (rule) {
                    case "+":
                        return "[a-z]";
                    case "*":
                        return `(.)\\${capture++}{${repeat - 1}}`;
                    case "$":
                        return "\\d";
                }
            })
            .replace(/(.+?)\1+/g, (match: string[], capture: string[]) => {
                const rle = `(?:${capture}){${match.length / capture.length}}`;
                return rle.length < match.length ? rle : match;
            });
        return new RegExp(`^${source}$`);
    }
    const compare = (pattern: string, input: string) => {
        return patternReader(pattern).test(input);
    }
    return compare(cardCharactersArray[0], cardCharactersArray[1]);
}


console.log(wildCardCharacters("+++++* abcdemmmmmm"));
console.log(wildCardCharacters("**+*{2} mmmrrrkbb"));
