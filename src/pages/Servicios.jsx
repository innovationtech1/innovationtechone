import Navegacion from "../components/Navegacion";
import "../App.css";
import ServCard from "../components/SerCard"
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";




export default function Servicios() {
  return (
    <div>
      <Navegacion />
      <h3 className="pageTitle">Servicios</h3>
      <br />
      <ServCard />
      <br />

      <button></button>

      <div className=" btnContainer">
        <button>
          <NavLink className="likesBtn" to="/innovationtechone/">
            PREVIEW
          </NavLink>
        </button>
        <button>
          <NavLink className="likesBtn" to="/innovationtechone/informacion/">
            Next
          </NavLink>
        </button>
      </div>

      <Footer />
    </div>
  );
}
