import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { theme } from "@/constants/theme";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const [hydrated, setHydrated] = useState<boolean>(false);
  // useEffect(() => {
  //   setHydrated(true);
  // }, []);
  // if (!hydrated) return null;
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
// https://genz-next.vercel.app/assets/imgs/template/logo.svg
