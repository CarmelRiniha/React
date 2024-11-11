import { useState } from "react";
import "./App.css";
import { images } from "./Images";
function App() {
  
  const [favicon, setFavicon] = useState(0);
  const changeIcon = (imgid) => {
    setFavicon(index);
    const icon = document.querySelector('link[rel="icon"]');
    icon.href = images[index];
  };

  return (
    <>
      <div>
        <button
          className="bg-red-500 {{favicon == 0 ? 'green' : 'red'}} text-dark autofocus  focus:outline-none  focus:bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          onClick={() =>
            changeIcon(
              "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmMi79HoFAjpeGsA0kzn6XMtax2f7r4e-4A&s"
            )
          }
        >
          RED
        </button>

        <button
          className="bg-yellow-500 {{favicon == 1 ? 'green' : 'yellow'}} active:bg-green-700 text-dark focus:outline-none focus:bg-green-700  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          onClick={() =>
            changeIcon(
              "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk92qOx7c5k5fybjVbUkwg6BGW_ptjgID9A&s"
            )
          }
        >
          YELLOW
        </button>

        <button
          className="bg-blue-500  {{favicon == 2 ? 'green' : 'blue'}} active:bg-green-700 text-dark focus:outline-none  focus:bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          onClick={() =>
            changeIcon(
              "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqXUWHhvgS_uCZR1vCu0jYrGiSS_5OahAeA&s"
            )
          }
        >
          BLUE
        </button>
      </div>
    </>
  );
}

export default App;
