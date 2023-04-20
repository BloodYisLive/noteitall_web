import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
					font-family: "Noto Sans";
					src: url("../assets/noto-sans/NotoSans-Regular.ttf");
					font-weight: 400;
					font-style: normal;
				}
      `,
    },
  },
});
