import { useState } from "react";
import { ReactComponent as ChevronLeft } from "../assets/icons/chevron_left.svg";
import { ReactComponent as ChevronRigth } from "../assets/icons/chevron_right.svg";
import pexels1 from "../assets/img/pexels1.jpg";
import pexels2 from "../assets/img/pexels2.jpg";
import pexels3 from "../assets/img/pexels3.jpg";
import pexels4 from "../assets/img/pexels4.jpg";
import styles from "./carousel.css";

function Carousel() {
  const images = [pexels1, pexels2, pexels3, pexels4];
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <div>
        <h2>Carousel</h2>
      </div>
      <div>
        {images.map(
          (img, index) =>
            current === index && (
              <div>
                <img
                  className="carousel-image"
                  key={index}
                  src={img}
                  alt="images"
                />
              </div>
            )
        )}
      </div>
      <div className="arrow-container">
        <ChevronLeft onClick={prevSlide} />
        <ChevronRigth onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Carousel;
