function wildCardCharacters(str: string) {
    // code goes here
    let cardCharactersArray: string[] = str.split(" ");
    const patternReader = (pattern: any) => {
        let shot = 1;
        const source = pattern
            .replace(/([+*$])(?:\{(\d+)\})?/g, (match: string[], rule: string, repeat = 3) => {
                switch (rule) {
                    case "+":
                        return "[a-z]";
                    case "*":
                        return `(.)\\${shot++}{${repeat - 1}}`;
                    case "$":
                        return "\\d";
                }
            })
            .replace(/(.+?)\1+/g, (match: string[], shot: string[]) => {
                const editPattern = `((?:${shot}){${match.length / shot.length}})`;
                return editPattern.length < match.length ? editPattern : match;
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
