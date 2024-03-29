import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import MammalsPage from "./components/MammalsPage";
import BirdsPage from "./components/BirdsPage";
import ReptilesPage from "./components/ReptilesPage";
import Footer from "./components/Footer";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import { arrayOfAnimals, arrayOfBirds, arrayOfMammals, arrayOfReptiles } from "./data/data";

function App() {
  const [animalDisplayed, setAnimalDisplayed] = useState(arrayOfAnimals);
  const [userHasClicked, setUserHasClicked] = useState(false);

  const handleUserClick = () => {
    setUserHasClicked((prevState) => !prevState);
  };

  return (
    <>
      <Header img={"logo-green.png"} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage animalList={animalDisplayed} userHasClicked={userHasClicked} handleUserClick={handleUserClick} />} />
          <Route path="/mammals" element={<MammalsPage animalDisplayed={arrayOfMammals} userHasClicked={userHasClicked} />} />
          <Route path="/reptiles" element={<ReptilesPage animalDisplayed={arrayOfReptiles} userHasClicked={userHasClicked} />} />
          <Route path="/birds" element={<BirdsPage animalDisplayed={arrayOfBirds} userHasClicked={userHasClicked} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
