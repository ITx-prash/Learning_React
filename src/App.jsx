import Expn_JSX from "./components/Expn_JSX";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JsxRules from "./components/JsxRules";
import MainContent from "./components/MainContent";
import Map from "./components/Map";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";
import Person from "./components/Person";
import Product from "./components/Product";
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
      <Map />
      <UserList />
      <ProductList />
      <Person name="Prashant" age={19} />
      <Product name="Iphone 16 Pro Max" price="$999"/>
    </>
  );
};

export default App;
