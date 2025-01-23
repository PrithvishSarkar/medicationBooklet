import "../src/tailwind.css";
import { useState } from "react";

// Name Input Modal -> Displayed at the very first render to store username in Local Storage
// updateUserName -> Updates the 'userName' State Variable which is then stored in LS
// updateInputModalDisplay -> Updates wheather or not the Modal should be displayed
function NameInputModal({ updateUserName, updateShowInputModal }) {
  const [nameValue, setNameValue] = useState("");

  // This function runs when the 'Submit' button is clicked
  // This function updates the 'userName' State Variable (in App.jsx)
  // This function updates the 'inputModalDisplay' Boolean State Variable (in App.jsx)
  const handleClick = () => {
    updateUserName(nameValue);
    updateShowInputModal(false);
  };

  return (
    <section
      className={
        "min-w-full min-h-[100vh] bg-transparent backdrop-blur-md fixed"
      }
    >
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        p-4 min-w-[90%] md:min-w-[40%] border-none rounded-lg bg-white
        flex flex-col gap-4 items-stretch justify-center"
      >
        <span className="p-2 text-center text-2xl font-bold font-sans">
          Please enter your full name!
        </span>
        <input
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          className="border-none rounded-lg outline-0 text-lg text-indigo-800 font-serif 
          p-2 ring-2 ring-rose-400 focus:ring-emerald-400"
        />
        <button
          onClick={handleClick}
          className="px-4 py-1 self-end border-2 border-emerald-400 outline-0 rounded-md
        bg-emerald-200 text-emerald-800 text-lg font-bold italic"
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export { NameInputModal };