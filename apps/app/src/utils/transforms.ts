import React from "react";

export function converMeasureCSSToNumber(measure = "0px"): number {
  return Number(measure.replace(/(px|rem|em|mm|cm|%)/g, ""));
}

export function covertFirstLetterToUppercase(letter: string): string {
  const firstLetterToUppercase = letter.charAt(0).toUpperCase();
  return firstLetterToUppercase + letter.substring(1);
}

export type GetComponentProps<T extends React.ComponentType<any>> =
  React.ComponentProps<T>;
