export interface Theme {
  name: string;
  properties: any;
}

export const defaultTheme: Theme = {
  name: "defaultTheme",
  properties: {
    $primary: "#DCDCDC",
  },
};

export const light: Theme = {
  name: "light",
  properties: {
    $primary: "#DCDCDC",
  },
};

export const dark: Theme = {
  name: "dark",
  properties: {
    $primary: "#DCDCDC",
  },
};
