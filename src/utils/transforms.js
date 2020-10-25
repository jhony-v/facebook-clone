export function converMeasureCSSToNumber(measure) {
    return Number(measure.replace(/(px|rem|em|mm|cm|%)/g,""));
} 