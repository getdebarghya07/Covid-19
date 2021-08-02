import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import "./ScrollToTop.css";

function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }
  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <i className="icon fas fa-chevron-up"></i>
    </div>
  );
}

export default ScrollToTop;
