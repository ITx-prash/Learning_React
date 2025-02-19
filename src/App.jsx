import Expn_JSX from "./components/Expn_JSX";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JsxRules from "./components/JsxRules";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";

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
      <ProductInfo />
    </>
  );
};

export default App;
