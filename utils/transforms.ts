export function converMeasureCSSToNumber(measure : string) : number {
    return Number(measure.replace(/(px|rem|em|mm|cm|%)/g,""));
} 

export function covertFirstLetterToUppercase(letter : string) : string {
    const firstLetterToUppercase = letter.charAt(0).toUpperCase();
    return firstLetterToUppercase + letter.substring(1);
}