import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/clothingItems";

function App() {
  const [defaultCardItems, setDefaultCardItems] =
    React.useState(defaultClothingItems);
  const [activeModal, setActiveModal] = React.useState("");

  function handleOpenModal() {
    setActiveModal("open");
  }
  function handleCloseModal() {
    setActiveModal("");
  }
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header onOpenModal={handleOpenModal} />
          <Main defaultItems={defaultCardItems} />
          <Footer />
          <ModalWithForm
            isOpen={activeModal === "open"}
            onClose={handleCloseModal}
            title={"New garment"}
            buttonText={"Add garment"}
          />
          <ItemModal />
        </div>
      </div>
    </>
  );
}

export default App;
