import "../src/tailwind.css";
import { useState } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

// Name Input Modal
function NameInputModal({ updateUserName, updateInputModalDisplay }) {
  const [nameValue, setNameValue] = useState("");

  const handleClick = () => {
    updateUserName(nameValue);
    updateInputModalDisplay(false);
  };
  return (
    <section className={"min-w-full min-h-[100vh] bg-transparent backdrop-blur-md fixed"}>
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
  
function MedicationDetailsFormSubmissionModal() {
  return (
    <section className="fixed min-w-full min-h-[100vh] bg-transparent backdrop-blur-sm">
      <div
        className="absolute min-w-[90%] md:min-w-[50%] top-[50%] left-[50%]
        translate-x-[-50%] translate-y-[-50%] bg-emerald-200 border-none rounded-2xl p-4
        text-8xl text-center text-emerald-800 font-sans font-extrabold
        flex flex-col items-center justify-between gap-4"
      >
        <IoShieldCheckmarkOutline />
        <p className="text-3xl">Your data has been submitted successfully!</p>
      </div>
    </section>
  );
}

export { MedicationDetailsFormSubmissionModal };
