import { useState } from "react";
import capsule from "/capsule.png";
import "../src/tailwind.css";

function NavigationBar({ updateComponentIndex }) {
  const [buttonIndex, setButtonIndex] = useState(null);
  const handleClick = (index) => {
    setButtonIndex(index);
    updateComponentIndex(index);
  };
  return (
    <section
      data-type="navigation-container"
      className="border-none rounded-lg
      bg-sky-200 p-2
      flex flex-col items-stretch justify-between gap-4"
    >
      <p
        data-type="logo"
        className="p-4 border-b-2 border-solid logo-border
        flex flex-row items-center justify-start gap-1"
      >
        <img src={capsule} alt="capsule-icon" className="max-w-8 max-h-8" />
        <span className="text-2xl font-sans italic text-sky-900">
          Medication Reminder
        </span>
      </p>
      {["Dashboard", "Medicine Details", "Medicine List"].map(
        (btnValue, index) => (
          <button
            key={index}
            className={`p-2 text-xl text-left font-sans font-bold
            outline-0 border-none rounded-lg
            bg-sky-400 ${
              buttonIndex === index
                ? "max-w-full text-black"
                : "max-w-[80%] text-sky-900"
            } button-transition`}
            onClick={() => handleClick(index)}
          >
            {btnValue}
          </button>
        )
      )}
    </section>
  );
}

export { NavigationBar };
