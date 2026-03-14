import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/clothingItems";

function App() {
  const [defaultCardItems, setDefaultCardItems] =
    React.useState(defaultClothingItems);
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main defaultItems={defaultCardItems} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
