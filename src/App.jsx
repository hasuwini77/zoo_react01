import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import MammalsPage from "./components/MammalsPage";
import BirdsPage from "./components/BirdsPage";
import ReptilesPage from "./components/ReptilesPage";
import Footer from "./components/Footer";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { arrayOfAnimals } from "./data/data";

function App() {
  const [animalDisplayed, setAnimalDisplayed] = useState(arrayOfAnimals);

  return (
    <>
      <Header img={"logo-green.png"} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage animalList={animalDisplayed} />} />
          <Route path="/mammals" element={<MammalsPage />} />
          <Route path="/reptiles" element={<ReptilesPage />} />
          <Route path="/birds" element={<BirdsPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
