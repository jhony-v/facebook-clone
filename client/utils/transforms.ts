export function converMeasureCSSToNumber(measure : string = '0px') : number {
  return Number(measure.replace(/(px|rem|em|mm|cm|%)/g, ''));
}

export function covertFirstLetterToUppercase(letter : string) : string {
  const firstLetterToUppercase = letter.charAt(0).toUpperCase();
  return firstLetterToUppercase + letter.substring(1);
}

export type GetComponentProps<T extends React.ComponentType<any>> = React.ComponentProps<T>;
