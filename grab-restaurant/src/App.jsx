import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Search from "./components/Search";

import "./App.css";

function App() {
  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-6">
        <Header />
        <Search />
        <Cards />
      </div>
    </>
  );
}

export default App;
