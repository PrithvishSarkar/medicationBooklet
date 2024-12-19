import { useState } from "react";
import capsule from "/capsule.png";
import "../src/tailwind.css";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdChecklistRtl } from "react-icons/md";

// udpateComponentIndex -> Updates the 'componentIndex' State Variable (in App.jsx)
function NavigationBar({ updateComponentIndex }) {
  // The 'buttonIndex' State Variable is a dummy index
  // This will be used to identify the buttons uniquely
  const [buttonIndex, setButtonIndex] = useState(null);

  // This function runs when any of the Navigation Buttons is clicked
  // This function updates the dummy index State Variable 'buttonIndex'
  // This function updates the 'componentIndex' Number State Variable (in App.jsx)
  // The 'componentIndex' is used to determine which section to display
  const handleClick = (index) => {
    setButtonIndex(index);
    updateComponentIndex(index);
  };

  // The buttonDetails Array is used to form the Navigation Buttons
  const buttonDetails = [
    { icon: <TbLayoutDashboardFilled />, name: "Dashboard" },
    { icon: <FaRegPenToSquare />, name: "Add Medicine" },
    { icon: <MdChecklistRtl />, name: "Checklist" },
  ];

  return (
    <section
      data-type="navigation-container"
      className="border-none rounded-lg
      bg-sky-200 p-2
      flex flex-col items-stretch justify-between gap-4"
    >
      <button
        onClick={() => window.location.reload()}
        data-type="logo"
        className="p-4 border-b-2 border-solid logo-border
        flex flex-row items-center justify-start gap-1"
      >
        <img src={capsule} alt="capsule-icon" className="max-w-8 max-h-8" />
        <span className="text-2xl font-mono font-extrabold text-sky-900">
          Medication Booklet
        </span>
      </button>

      {/* The buttons are rended here */}
      {buttonDetails.map((buttonObject, index) => (
        <button
          key={index}
          className={`p-2 text-xl text-left font-sans font-bold
            outline-0 border-none rounded-lg flex flex-row gap-2 items-center justify-start
            bg-sky-400 ${
              buttonIndex === index
                ? "max-w-full text-black"
                : "max-w-[80%] text-sky-900"
            } button-transition`}
          onClick={() => handleClick(index)}
        >
          {buttonObject.icon} {buttonObject.name}
        </button>
      ))}
    </section>
  );
}

export { NavigationBar };
