import Expn_JSX from "./components/Expn_JSX";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JsxRules from "./components/JsxRules";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Header />
      <MainContent />
      <Footer />
      <JsxRules />
      <Expn_JSX />
      <Greeting />
    </>
  );
};

export default App;
