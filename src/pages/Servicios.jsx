import Navegacion from "../components/Navegacion";
import "../App.css";
import ServCard from "../components/SerCard"

import { FaReact } from "react-icons/fa"
import { FaGithub} from "react-icons/fa"


export default function Servicios() {
  return (
    <div>
      <Navegacion />
      <h3 className="pageTitle">Servicios</h3>
      <br />
      <ServCard />

      <div className="textContainer">
        <h1 className="cardTitle">Especificaciones</h1>
        <br />
        <h1 className="logoReact">
          <FaReact />
        </h1>

        <h3 className="cardDescription">
        
          1.-Lo que trabajamos son pagina o sitios web personalizados basados en
          la libreria de REACT react es una libreria creada por "FACEBOOK" con la
          cual desarrolla su aplicacion las ventajas de las aplicaciones web es
          que son mas faciles de mantener se pueden compartir mas facil a
          traves de las redes sociales , no necesitan descarga y pueden ser visitadas por cualquiera los 365 dias del año 
        </h3>
        <br />
        <br />
      </div>
           <div className="textContainer">
        <h1 className="cardTitle">Especificaciones</h1>
        <br />
        <h1 className="logoGitHub">
          <FaGithub />
        </h1>
            <h3 className="cardDescription">
        
         Utilizamos GitHub como plataforma de almacecnamiento para crear una copia de seguridad  asi tu pagina siempre estara disponibe  para hacer actualizaciones "GITHUB" es la plataforma mas grande de almacenamiento del platena. <div><br /></div> Alli viven la mayoria de repositorios es el hosting  es donde viven la mayoria de los proyectos hoy en dia  los cambios y actualizaciones tambien tienen un costo dependiendo lo que se quiera actualizar es por eso que tienes que tener en mente como quieres tu pagina web.       </h3>



   
        <br />
        <br />
      </div>
    </div>
  );
}
