import { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {

  const images = [

    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200",

    "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200",

    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200",

    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200",

    "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=1200",

    "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=1200"

  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(
      (prev) => (prev + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        prev === 0
          ? images.length - 1
          : prev - 1
    );
  };

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide();

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="slider-section">

      <div className="slider-container">

        <button
          className="arrow left"
          onClick={prevSlide}
        >
          ❮
        </button>

        <img
          src={images[current]}
          alt="Cute Animal"
          className="slider-image"
        />

        <button
          className="arrow right"
          onClick={nextSlide}
        >
          ❯
        </button>

      </div>

    </section>

  );

}

export default Slider;