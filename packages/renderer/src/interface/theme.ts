export interface Theme {
  primaryColor?: string;
  linkColor?: string;
  successColor?: string;
  warningColor?: string;
  errorColor?: string;
  fontSizeBase?: string;
  headingColor?: string;
  textColor?: string;
  textColorSecondary?: string;
  disabledColor?: string;
  borderRadiusBase?: string;
  borderColorBase?: string;
  boxShadowBase?: string;
  [key: string]: string | undefined;
}
