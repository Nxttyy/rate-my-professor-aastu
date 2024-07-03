import "../App.css";
import teacher from "../assets/images/teacher.png";
// /home/natty/Dev/Projs/rate-my-professor-aastu/src/assets/images/teacher.png
let suggestions = [
  "Mr. Prof And",
  "Mr. Prof And",
  "Mr. Prof And",
  "Mr. Prof And",
  "Mr. Prof And",
];

function Landing() {
  return (
    <div className="p-5 m-3 my-landing rounded">
      <p className="lexend-header"> Search For Your Professor! </p>
      <input
        type="text"
        placeholder="Professor name..."
        className="p-1 my-search rounded"
      />
      {suggestions.map((element, index) => (
        <div className="search-suggestion my-2 pt-2 px-3 rounded text-start d-flex ">
          <img
            className="search-img mx-2 pb-1"
            src={teacher}
            alt="prof. image"
          />

          <p className="lexend-mini h4"> {element} </p>
        </div>
      ))}

      <div className="w-100">
        <button className="w-100 py-1 rounded my-button">
          <p className="h-3"> Add this professors</p>
        </button>
        <p className="h-4 hint m-2">
          add him/her so students can write reviews!
        </p>
      </div>
    </div>
  );
}

export default Landing;
