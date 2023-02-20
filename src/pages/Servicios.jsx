import Navegacion from "../components/Navegacion";
import "../App.css";
import ServCard from "../components/SerCard"
import Footer from "../components/footer";




export default function Servicios() {
  return (
    <div>
      <Navegacion />
      <h3 className="pageTitle">Servicios</h3>
      <br />
      <ServCard />

    <Footer/>
    </div>
  );
}
