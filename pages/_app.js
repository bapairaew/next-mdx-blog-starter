import { ThemeProvider } from "theme-ui";
import components from "~/theme-ui/mdxComponents";
import theme from "~/theme-ui/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider components={components} theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
