import slider0 from "../assets/img/slider0.jpg"
import slider1 from "../assets/img/slider1.jpg"
import slider2 from "../assets/img/slider2.jpg"
import slider3 from "../assets/img/slider3.jpg"

import "../App.css";

function Slider() {
  return (
    <div>
      <div id="slider">
        <figure>
          <img src={slider0} alt="slider" />
          <img src={slider1} alt="slider" />
          <img src={slider2} alt="slider" />
          <img src={slider3} alt="slider" />
        </figure>
      </div>
    </div>
  );
}

export default Slider;
