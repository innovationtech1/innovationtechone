import "../App.css";
import Slider from "../components/Slider";
import Navegacion from "../components/Navegacion";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <Navegacion className="" />
      <Slider />

      <p>Actualizando componentes</p>

      <h3>
        Creando Tecnologia
      </h3>

      <Footer />
    </div>
  );
}

export default Home;
