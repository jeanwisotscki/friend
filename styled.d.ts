import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;

      green: string;
      purple: string;
      cyan: string;
      red: string;
      yellow: string;
      orange: string;
      onyx: string;
    };

    fontSizes: {
      normal: string;
      smMedium: string;
      medium: string;
      large: string;
      xtLarge: string;
    };
  }
}
