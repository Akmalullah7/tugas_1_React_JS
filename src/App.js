import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MenuUtama from "./Page/MenuUtama";
import MenuProduk from "./Page/MenuProduct";
import MenuKontak from "./Page/MenuKontak";

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuProduk />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
