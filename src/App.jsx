import "./App.css";
import { person } from "./Person.jsx";
import Card from "./Card.jsx";
export default function App() {
  return (
    <div className="bg-emerald-100">
      <div className="flex bg-emerald-100 justify-center font-mono text-3xl text-sky-900 font-bold">
        CARDS
      </div>
      <div className=" container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-emerald-100 flex flex-wrap columns-4 justify-center space-around gap-10">
        {person.map((persons) => (
          <Card
            id={persons.id}
            images={persons.images}
            name={persons.name}
            description={persons.description}
            isActive={persons.isActive}
          />
        ))}
      </div>
    </div>
  );
}
