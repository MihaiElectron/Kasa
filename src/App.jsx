import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      
       {/* Toutes les pages utilisent MainLayout */}
       <Route element={<MainLayout />}>

        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Page À propos */}
        <Route path="/about" element={<About />} />

        {/* Fiche logement dynamique */}
        <Route path="/housing/:id" element={<Housing />} />

        {/* Page 404 */}
        <Route path="*" element={<Error />} />

      </Route>

    </Routes>
  );
}

export default App;
