import React, { useState } from "react";
import "../App.css"; // importamos nuestro archivo CSS

function Accordion({ panels }) {
  const [activePanelIndex, setActivePanelIndex] = useState(null);

  const handleClick = (index) => {
    setActivePanelIndex(activePanelIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {panels.map((panel, index) => (
        <div
          className={`accordion-item ${
            activePanelIndex === index ? "active" : ""
          }`}
          key={panel.title}
        >
          <div className="accordion-header" onClick={() => handleClick(index)}>
            <h2>{panel.title}</h2>
            <span>{activePanelIndex === index ? "-" : "+"}</span>
          </div>
          <div className="accordion-content">
            <p>{panel.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AccordionInfo() {
  const panels = [
    {
      title: "INFORMACION 1",
      content:
        "Contenido de la informacion 1 ideal para ingresar descripcion de algun servicio",
    },
    {
      title: "INFORMACION 2",
      content:
        "Contenido de la informacion 2 ideal para poner descripcion de algun servicio",
    },
    {
      title: "INFORMACION 3",
      content:
        "Contenido de la informacion 3 ideal para poner descripcion de algun servicio",
    },
  ];

  return (
    <div>
                      <h1> Componente Accordion</h1>
                      <br />
      <Accordion panels={panels} />
    </div>
  );
}

export default AccordionInfo;
