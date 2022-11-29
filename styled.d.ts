import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      bgSecondary: string;

      primary: string;
      secondary: string;

      green: string;
      purple: string;
      blue: string;
      red: string;
      yellow: string;
      pink: string;
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
