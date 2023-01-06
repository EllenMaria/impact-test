import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            fontSize: "20px",
          }}
          onClick={scrollUp}
        >
          🖖 Back to Top
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
