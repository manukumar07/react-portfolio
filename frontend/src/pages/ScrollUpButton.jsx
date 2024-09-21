import React, { useState, useEffect } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#1ABC9C] text-[#ffff] p-4 md:p-3 w-12 rounded-full shadow-lg  font-bold transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 font-extrabold"
      }`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <span className="text-2xl font-extrabold">↑</span>
    </button>
  );
};

export default ScrollUpButton;
