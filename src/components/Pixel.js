import React, { useState } from "react";
import "../styles/pixel.scss";

const Pixel = ({ selectedColor }) => {
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const applyColor = () => {
    setPixelColor(selectedColor);
    setCanChangeColor(false); // Забороняти міняти колір??? Можна подумати як фічу для сайту. Дозволяти міняти замальований або забороняти цього робити;
  };

  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  };

  const resetColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }

    setCanChangeColor(true);
    
  };

  return (
    <div
      className="pixel"
      style={{ backgroundColor: pixelColor }}
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
    ></div>
  );
};

export default Pixel;
