import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styling/GlobalTheme";
import { theme } from "./styling/Theme";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
