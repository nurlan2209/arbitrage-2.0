import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ReglamentPage from "./pages/DocumentsPage/ReglamentPage";
import SborahiPage from "./pages/DocumentsPage/SborahiPage";
import ReestrPage from "./pages/DocumentsPage/ReestrPage";
import SoglPage from "./pages/DocumentsPage/SoglPage";
import ObrazczyPage from "./pages/DocumentsPage/ObrazczyPage";
import PogasheniePage from "./pages/DocumentsPage/PogasheniePage";
import IskEdinArbitrPage from "./pages/DocumentsPage/IskEdinArbitrPage";
import OtzyvIskPage from "./pages/DocumentsPage/OtzyvIskPage";
import PoroznomPage from "./pages/DocumentsPage/PoroznomPage";
import PorpodPage from "./pages/DocumentsPage/PorpodPage";
import PorrasarbPage from "./pages/DocumentsPage/PorrasarbPage";
import SchemaPage from "./pages/DocumentsPage/SchemaPage"; // <-- ИМПОРТ НОВОЙ СТРАНИЦЫ
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "news":
        return <NewsPage />;
      case "contact":
        return <ContactPage />;
      case "reglament":
        return <ReglamentPage />;
      case "sborahi":
        return <SborahiPage />;
      case "reestr":
        return <ReestrPage />;
      case "sogl":
        return <SoglPage />;
      case "obrazcy":
        return <ObrazczyPage />;
      case "pogashenie":
        return <PogasheniePage />;
      case "isk_edin_arbitr":
        return <IskEdinArbitrPage />;
      case "otzyv_isk":
        return <OtzyvIskPage />;
      case "poroznom":
        return <PoroznomPage />;
      case "porpod":
        return <PorpodPage />;
      case "porrasarb":
        return <PorrasarbPage />;
      case "schema": // <-- ДОБАВЛЕН НОВЫЙ КЕЙС
        return <SchemaPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-grow">{renderPage()}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
