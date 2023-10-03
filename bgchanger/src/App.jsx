import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");
  document.body.style.background = color;
  return (
    <>
      <div className="w-11/12 md:w-2/4 bg-white rounded-xl fixed bottom-10 left-1/2 -translate-x-1/2 p-1">
        <div className="w-full flex justify-between">
          <button
            onClick={() => setColor("black")}
            className="bg-black rounded-lg text-white py-0.5 px-3 m-1"
          >
            black
          </button>

          <button
            onClick={() => setColor("red")}
            className="bg-red-600 rounded-lg text-white py-0.5 px-3 m-1"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="bg-green-600 rounded-lg text-white py-0.5 px-3 m-1"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 rounded-lg text-white py-0.5 px-3 m-1"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("pink")}
            className="bg-pink-600 rounded-lg text-white py-0.5 px-3 m-1"
          >
            Pink
          </button>

          <button
            onClick={() => setColor("orange")}
            className="bg-orange-600 rounded-lg text-white py-0.5 px-3 m-1"
          >
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
