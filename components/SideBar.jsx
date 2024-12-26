import "../src/tailwind.css";

// updateShowUserGuideModal -> Updates the Boolean State Variable (in App.jsx)
// updateShowDeleteDataModal -> Updates the Boolean State Variable (in App.jsx)
// An appropriate Modal is displayed whenever the buttons are clicked
function SideBar({ updateShowUserGuideModal, updateShowDeleteDataModal }) {
  const date = new Date().toDateString();

  return (
    <section
      className="flex flex-col items-stretch justify-between gap-1 text-xs
      bg-rose-200 p-2 rounded-lg"
    >
      <span className="font-mono font-semibold">Date: {date}</span>

      {/* This Button invokes a Modal to Delete all the data from the Local Storage */}
      <button
        onClick={() => updateShowDeleteDataModal(true)}
        className="font-sans font-bold text-left text-pink-900
        p-1 border-solid border-l-2 border-pink-900"
      >
        Delete All Data
      </button>

      {/* 
      This Button invokes a "User Guide" Modal
      The "User Guide" Modal contains information to navigate and use this application
      */}
      <button
        onClick={() => updateShowUserGuideModal(true)}
        className="font-sans font-bold text-left text-pink-900
        p-1 border-solid border-l-2 border-pink-900"
      >
        User Guide
      </button>

      {/* This button redirects to my GitHub repository for this App */}
      <button
        onClick={() =>
          window.open(
            "https://github.com/prithvishsarkar/medicationBooklet/",
            "_blank"
          )
        }
        className="font-sans font-bold text-left text-pink-900
        p-1 border-solid border-l-2 border-pink-900"
      >
        Learn More
      </button>
    </section>
  );
}
export { SideBar };
