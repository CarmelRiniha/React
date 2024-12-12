import React from "react";
import "./swiper.css";
function Swiperdemo() {

  return (
    <div>
      <main>
        <swiper-container
          style={{
            "--swiper-navigation-color": "teal",
            "--swiper-pagination-color": "teal",
          }}
          pagination-clickable="true"
          navigation="true"
          effect="cube"
          grab-cursor="true"
          cube-effect-shadow="true"
          cube-effect-slide-shadows="true"
          className="mySwiper"
        >
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt=""
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHlgkvSBjLFpLP282EpgmO5qRqRcsCiM_rQ&s"
              alt=""
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s"
              alt=""
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsU8MpTGD5DDjr5w7OfiYQrGmFGUOZEqaCQ&s"
              alt=""
            />
          </swiper-slide>
        </swiper-container>
        {/* <swiper-container
          style={{
            "--swiper-navigation-color": "teal",
            "--swiper-pagination-color": "teal",
          }}
          pagination="true"
          navigation="true"
          effect="fade" // This will create a fade effect instead of the cube effect
          grab-cursor="true"
          className="mySwiper"
        >
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHlgkvSBjLFpLP282EpgmO5qRqRcsCiM_rQ&s"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsU8MpTGD5DDjr5w7OfiYQrGmFGUOZEqaCQ&s"
              alt=""
            />
          </swiper-slide>
        </swiper-container> */}
      </main>
     
    </div>
  );
}

export default Swiperdemo;
