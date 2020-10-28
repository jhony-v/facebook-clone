export function converMeasureCSSToNumber(measure) {
    return Number(measure.replace(/(px|rem|em|mm|cm|%)/g,""));
} 

export function covertFirstLetterToUppercase(letter) {
    const firstLetterToUppercase = letter.charAt(0).toUpperCase();
    return firstLetterToUppercase + letter.substring(1);
}