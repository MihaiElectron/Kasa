import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      {/* Page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Page À propos */}
      <Route path="/about" element={<About />} />

      {/* Fiche logement dynamique */}
      <Route path="/housing/:id" element={<Housing />} />

      {/* Page 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
