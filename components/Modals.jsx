import "../src/tailwind.css";
import { useState } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

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

// This Modal is Displayed when the user successfully submits the Medicine Details Form
// This Modal is used in MedicineDetails.jsx file
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

// This Modal is displayed when the user clicks on 'User Guide' in Sidebar
// updateShowUserGuideModal -> Updates wheather or not this modal should be shown
function UserGuideModal({ updateShowUserGuideModal }) {
  return (
    <section className="fixed min-w-full min-h-[100vh] bg-transparent backdrop-blur-sm">
      <div
        className="absolute min-w-[90%] md:min-w-[30%] top-[50%] left-[50%]
        translate-x-[-50%] translate-y-[-50%] bg-violet-200 border-none rounded-lg
        p-2 text-neutral-800 font-sans"
      >
        <table className="mb-4 border border-violet-500 rounded-md border-separate">
          <tbody>
            <tr className="text-neutral-800">
              <td className="border-b border-b-violet-500 p-1 
              font-bold text-xl text-right font-mono">
                Dashboard:{" "}
              </td>
              <td className="border-b border-b-violet-500 p-1 italic 
              text-lg text-left font-sans">
                Contains all the Medicine Details
              </td>
            </tr>
            <tr className="text-neutral-800">
              <td className="border-b border-b-violet-500 p-1 
              font-bold text-xl text-right font-mono">
                Add Medicine:{" "}
              </td>
              <td className="border-b border-b-violet-500 p-1 italic 
              text-lg text-left font-sans">
                Form to add more medicines in the list
              </td>
            </tr>
            <tr className="text-neutral-800">
              <td className="p-1 font-bold text-xl text-right font-mono">Checklist: </td>
              <td className="p-1 italic text-lg text-left font-sans">
                Check out the medicines after you intake
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => updateShowUserGuideModal(false)}
          className="border-none rounded-md bg-red-600 
          text-white text-sm font-bold px-4 py-1"
        >
          Close
        </button>
      </div>
    </section>
  );
}

export { UserGuideModal };

// updateShowDeleteDataModal -> Updates whether or not the Delete Modal should be displayed
// numberOfChecklist -> Length of the main Medication Details Array
function DeleteLocalStorageData({ updateShowDeleteDataModal, numberOfChecklist }) {

  // This function runs when the "Delete" button is clicked
  // This function removes all the Local Storage Data related to this Application
  const handleDeleteLocalStorage = () => {
    window.localStorage.removeItem("medication-data");
    window.localStorage.removeItem("medicine-user-name");
    for (let index = 0; index < numberOfChecklist; index++)
      window.localStorage.removeItem(`medicine-checklist-${index}`);
    window.location.reload();
  };
  
  return (
    <section
      className={
        "min-w-full min-h-[100vh] bg-transparent backdrop-blur-md fixed"
      }
    >
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        p-4 min-w-[90%] md:min-w-[40%] min-h-[60%] sm:min-h-[50%]
        border-none rounded-lg bg-rose-300"
      >
        <p className="mb-2 text-center text-2xl font-medium font-sans text-neutral-800">
          <span className="font-bold text-red-800">Warning!!</span> <br />
          You will lose all the stored data and the application will load
          again! <br />
          <br />
          Do you really want to delete?
        </p>
        <button
          onClick={handleDeleteLocalStorage}
          className="px-4 py-1 border-none outline-0 rounded-md
        bg-red-600 text-white text-lg font-bold absolute bottom-2 left-4"
        >
          Delete
        </button>
        <button
          onClick={() => updateShowDeleteDataModal(false)}
          className="px-4 py-1 border-none outline-0 rounded-md
        bg-emerald-600 text-white text-lg font-bold absolute bottom-2 right-4"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export { DeleteLocalStorageData };
