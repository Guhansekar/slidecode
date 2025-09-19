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
const images = [
  { img: "1.jpg" },
  { img: "1.jpg" },
  { img: "1.jpg" },
  { img: "1.jpg" },
  { img: "1.jpg" },
  { img: "1.jpg" },
  { img: "2.JPG" },
  { img: "2.JPG" },
  { img: "2.JPG" }
];

function App() {
  const [startIdx, setStartIdx] = useState(0);
  const total = images.length;
  const imagesPerSlide = 6; // 2 rows x 3 images

  const handlePrev = () => {
    setStartIdx((prev) => (prev === 0 ? total - imagesPerSlide : prev - 3 < 0 ? 0 : prev - 3));
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 3 >= total ? 0 : prev + 3));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 3 >= total ? 0 : prev + 3));
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  // Get 6 images for current slide, wrap around if needed
  const getDisplayImages = () => {
    let imgs = [];
    for (let i = 0; i < imagesPerSlide; i++) {
      imgs.push(images[(startIdx + i) % total]);
    }
    return imgs;
  };

  const displayImages = getDisplayImages();

  return (
    <>
      <div className="display">
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button onClick={handlePrev}>
            &#8592;
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* First row */}
            <div style={{ display: "flex", gap: "20px" }}>
              {displayImages.slice(0, 3).map((img, idx) => (
                <div className="imgslide" key={idx}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 1}`}
                    style={{ width: "300px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div style={{ display: "flex", gap: "20px" }}>
              {displayImages.slice(3, 6).map((img, idx) => (
                <div className="imgslide" key={idx + 3}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 4}`}
                    style={{ width: "300px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="next">
            &#8594;
          </button>
        </div>
        {/* Dots navigation */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
          {Array.from({ length: Math.ceil(total / 3) }).map((_, idx) => (
            <span
              key={idx}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: startIdx / 3 === idx ? "#333" : "#ccc",
                display: "inline-block",
                cursor: "pointer"
              }}
              onClick={() => setStartIdx(idx * 3)}
            />
          ))}

           </div>
      </div>
    </>
  );
}

export default App
