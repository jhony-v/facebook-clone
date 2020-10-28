import theme from ".";

export namespace ThemeBase {
  type PartialThemeType<T> = readonly (keyof T);

  export type Global = typeof theme;

  export type Colors = typeof theme.colors;
  export type ColorsTypes = PartialThemeType<Colors>;
  export type ColorsTextTypes =
    | "vgTextBlackAlpha00"
    | "vgTextBlackAlpha10"
    | "vgTextBlackAlpha20"
    | "vgTextBlackAlpha30"
    | "vgTextBlack"
    | "vgTextPrimary";

  export type FontSizes = typeof theme.fontSizes;
  export type FontSizesTypes = PartialThemeType<FontSizes>;

  export type LayoutSizes = typeof theme.layoutSizes;
  export type LayoutSizesTypes = PartialThemeType<LayoutSizes>;
}
