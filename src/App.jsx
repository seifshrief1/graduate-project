import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sections from "./pages/Sections";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConatctLinks from "./pages/ContactLinks";
import ContactWithPersons from "./pages/ContactWithPersons";
import KonwYourSection from "./pages/KonwYourSection";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sections" element={<Sections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactlinks" element={<ConatctLinks />} />
        <Route path="/contactWithPersons" element={<ContactWithPersons />} />
        <Route path="/knowYourSection" element={<KonwYourSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
