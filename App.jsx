import "./App.css"
import { useState, useEffect } from "react";

const images = [
  { img: "1.jpg" },
  { img: "2.JPG" },
   { img: "1.jpg" },
  { img: "2.JPG" },
  { img: "1.jpg" }
];

function App() {
  const [startIdx, setStartIdx] = useState(0);
  const total = images.length;

  const handlePrev = () => {
    setStartIdx((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  const getDisplayImages = () => [
    images[startIdx % total],
    images[(startIdx + 1) % total],
    images[(startIdx + 2) % total],
     images[(startIdx + 3) % total],
    images[(startIdx + 4) % total],
    images[(startIdx + 5) % total]
  ];

  return (
    <>
      <div className="display">
      <div style={{ display: "flex", alignItems: "center", gap: "16px"  }}>
        <button onClick={handlePrev}>
          &#8592;
        </button>
        <div style={{ display: "flex", gap: "20px" }}>
          {getDisplayImages().map((img, idx) => (
           <div className="imgslide"> <img
              key={idx}
              src={img.img}
              alt={`Slide ${startIdx + idx + 1}`}
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
            <p>comfort</p>
            </div>
          ))}
          
        </div>
        <button onClick={handleNext} className="next">
          &#8594;
        </button>
      </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
          {images.map((_, idx) => (
            <span
              key={idx}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: idx === startIdx ? "#333" : "#ccc",
                display: "inline-block",
                cursor: "pointer"
              }}
              onClick={() => setStartIdx(idx)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App
