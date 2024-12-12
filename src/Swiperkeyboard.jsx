import React from 'react'
import { useState } from 'react'
import "./swiperkeyboard.css"
function Swiperkeyboard() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHlgkvSBjLFpLP282EpgmO5qRqRcsCiM_rQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsU8MpTGD5DDjr5w7OfiYQrGmFGUOZEqaCQ&s"
    ];
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const handleKeyDown = (e) => {
      handleKeyPress(e);
    };
  return (
    <div>
       <main
        
        onKeyDown={handleKeyDown} 
      >
        <swiper-container style={{ position: "relative" }}>
          <swiper-slide>
            <img
              src={images[currentSlide]}
              alt="Slide"
              style={{ width: "100%", height: "auto" }}
            />
          </swiper-slide>
        </swiper-container>

        <swiper-buttons style={{ textAlign: "center" }}>
          <button onClick={prevSlide}>Previous</button>
          <button onClick={nextSlide}>Next</button>
        </swiper-buttons>
      </main>
    </div>
  )
}

export default Swiperkeyboard
