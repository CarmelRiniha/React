import { useState } from "react";
import "./App.css";
import { images } from "./Images";
import Component from "./Component.jsx";

// function App() {

//   const [favicon, setFavicon] = useState("0");
//   function changeIcon(img) {
//     setFavicon(img);
//     const icon = document.querySelector('link[rel="icon"]');
//     icon.href = img;
//   }

//   return (
//     <>
//       <div>
//         <button
//           className="bg-red-500 active:bg-green-700 text-dark autofocus  focus:outline-none  focus:bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
//           onClick={() =>
//             changeIcon(
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmMi79HoFAjpeGsA0kzn6XMtax2f7r4e-4A&s"
//             )
//           }
//         >
//           RED
//         </button>

//         <button
//           className="bg-yellow-500 active:bg-green-700 text-dark focus:outline-none focus:bg-green-700  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
//           onClick={() =>
//             changeIcon(
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk92qOx7c5k5fybjVbUkwg6BGW_ptjgID9A&s"
//             )
//           }
//         >
//           YELLOW
//         </button>

//         <button
//           className="bg-blue-500  active:bg-green-700 text-dark focus:outline-none  focus:bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
//           onClick={() =>
//             changeIcon(
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqXUWHhvgS_uCZR1vCu0jYrGiSS_5OahAeA&s"
//             )
//           }
//         >
//           BLUE
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;

function App() {
  const [favicon, setFavicon] = useState(1);
  const firstIcon=images[favicon-1].img;
  const icon = document.querySelector('link[rel="icon"]');
  icon.href = firstIcon;
  const changeIcon = (image,id) => {
    const icon = document.querySelector('link[rel="icon"]');
    icon.href = image;
    setFavicon(id);
  };

  return (
    <div className="flex justify-center" >
      {images.map((imageItem) => (
        <Component 
          name={imageItem.btn}
          btnclick={() => changeIcon(imageItem.img, imageItem.imgid)}
          favi={favicon}
          curId={imageItem.imgid}
        ></Component>
      ))}
    </div>
  );
}

export default App;
