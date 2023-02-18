import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Informacion from "./pages/Informacion";
import Servicios from "./pages/Servicios";
import NotFoundPage from "./pages/NotFoundPage";
import AvisoCookies from "./pages/AvisoCookies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/innovationtechone/avisocookies/"
            element={<AvisoCookies />}
          />
          <Route path="/innovationtechone" element={<Home />} />
          <Route path="/innovationtechone/servicios" element={<Servicios />} />
          <Route
            path="/innovationtechone/informacion"
            element={<Informacion />}
          />
          <Route path="/innovationtechone/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
