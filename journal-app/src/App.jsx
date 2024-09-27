import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JournalPage from "./components/JournalPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </Router>
  )
}

export default App
