import "../src/tailwind.css";
import { useState } from "react";

// User is supposed to enter the medicine details using the form
// userName Prop -> Shows the name of the user
// updateMedicineCardDetails -> State Updates -> Updates Medicine Details Array (in Main.jsx)
// updateShowSubmissionModal -> Shows / Hides the successful submission Modal (State Update)
function MedicineDetails({
  userName,
  updateMedicineCardDetails,
  updateShowSubmissionModal,
}) {
  // The Temporary Object contains the date of the Form Input
  const [temporarayObject, setTemporaryObject] = useState({
    name: "",
    type: "",
    dosage: "",
    frequency: "",
    time: "",
    startingDate: "",
    endingDate: "",
    instructions: "",
  });

  // This function is called when the user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Displays the Successful Submission Modal
    setTimeout(() => {
      updateShowSubmissionModal(true);
    }, 500);

    // Hides the Successful Submission Modal
    setTimeout(() => {
      updateShowSubmissionModal(false);
    }, 3500);

    // Updates the Medicine Card Details Array (in Main.jsx)
    updateMedicineCardDetails((previousArray) => [
      ...previousArray,
      temporarayObject,
    ]);

    // Updates the Form values to look as it was initially
    setTemporaryObject({
      name: "",
      type: "",
      dosage: "",
      frequency: "",
      time: "",
      startingDate: "",
      endingDate: "",
      instructions: "",
    });
  };

  return (
    <form
      action="#"
      method="POST"
      onSubmit={handleSubmit}
      className="p-2 m-2 md:ml-0 md:grow rounded-lg bg-gray-100"
    >
      <p className="font-bold font-serif text-base text-right p-2">
        Medication Details
      </p>
      <p
        className="font-extrabold font-sans text-2xl text-center
      pb-1 mb-4 border-solid border-b-2 medication-details-border"
      >
        Hello, {userName}!
      </p>

      {/* Medicine Name Input */}
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medicine Name
        </legend>
        <input
          type="text"
          name="medicineName"
          required={true}
          placeholder="Amoxicillin"
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              name: e.target.value,
            }))
          }
          value={temporarayObject.name}
          className="min-w-full text-sky-500 text-lg 
          bg-transparent outline-0 border-none custom-placeholder"
        />
      </fieldset>

      {/* Medicine Type Select Input */}
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medication Type
        </legend>
        <select
          required={true}
          name="medicineType"
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              type: e.target.value,
            }))
          }
          value={temporarayObject.type}
          className="min-w-full text-sky-500 text-lg bg-transparent outline-0 border-none"
        >
          <option value="none">--Select--</option>
          <option value="tabletORcapsule">Tablet / Capsule</option>
          <option value="syrup">Syrup</option>
          <option value="ointment">Ointment</option>
          <option value="inhaler">Inhaler</option>
          <option value="injection">Injection</option>
          <option value="spray">Spray</option>
          <option value="drops">Drops</option>
        </select>
      </fieldset>

      {/* Medicine Dosage Input */}
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medicine Dosage
        </legend>
        <input
          type="text"
          name="medicineDosage"
          placeholder="500mg"
          required={true}
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              dosage: e.target.value,
            }))
          }
          value={temporarayObject.dosage}
          className="min-w-full text-sky-500 text-lg 
          bg-transparent outline-0 border-none custom-placeholder"
        />
      </fieldset>

      {/* Medicine Frequency Select Input */}
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medication Frequency
        </legend>
        <select
          required={true}
          name="medicineFrequency"
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              frequency: e.target.value,
            }))
          }
          value={temporarayObject.frequency}
          className="min-w-full text-sky-500 text-lg 
        bg-transparent outline-0 border-none"
        >
          <option value="none">--Select--</option>
          <option value="once">Once a Day</option>
          <option value="twice">Twice a Day</option>
          <option value="thrice">Thrice a Day</option>
        </select>
      </fieldset>

      {/* Medicine Time Input */}
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medication Time
        </legend>
        <input
          type="time"
          name="medicationTime"
          required={true}
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              time: e.target.value,
            }))
          }
          value={temporarayObject.time}
          className="min-w-full text-sky-500 text-lg bg-transparent outline-0 border-none"
        />
      </fieldset>

      {/* Medicine Starting Date Input */}
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Starting Date
        </legend>
        <input
          type="date"
          name="medicationStartingDate"
          required={true}
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              startingDate: e.target.value,
            }))
          }
          value={temporarayObject.startingDate}
          className="min-w-full text-sky-500 text-lg bg-transparent outline-0 border-none"
        />
      </fieldset>

      {/* Medicine Ending Date Input */}
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Ending Date
        </legend>
        <input
          type="date"
          name="medicationEndingDate"
          required={true}
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              endingDate: e.target.value,
            }))
          }
          value={temporarayObject.endingDate}
          className="min-w-full text-sky-500 text-lg bg-transparent outline-0 border-none"
        />
      </fieldset>

      {/* Medicine Instructions Input */}
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Instructions
        </legend>
        <textarea
          required={true}
          name="medicationInstruction"
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              instructions: e.target.value,
            }))
          }
          value={temporarayObject.instructions}
          className="min-w-full text-sky-500 text-lg 
        bg-transparent outline-0 border-none resize-y"
        ></textarea>
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        className="border-none rounded-lg outline-0 bg-sky-700 font-sans 
        text-gray-100 text-xl text-center cursor-pointer p-2 min-w-full"
      >
        Add Medication
      </button>
    </form>
  );
}
export { MedicineDetails };
