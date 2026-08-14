import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollProgress.css";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total > 0 ? (current / total) * 100 : 0);
      setShowTop(current > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollProgress;