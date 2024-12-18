import "../src/tailwind.css";
import { useState } from "react";

// Medicine Details
function MedicineDetails({
  userName,
  updateMedicineCardDetails,
  updateShowSubmissionModal,
}) {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      updateShowSubmissionModal(true);
    }, 500);
    setTimeout(() => {
      updateShowSubmissionModal(false);
    }, 3500);
    updateMedicineCardDetails((previousArray) => [
      ...previousArray,
      temporarayObject,
    ]);
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
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medicine Name
        </legend>
        <input
          type="text"
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
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medication Type
        </legend>
        <select
          required={true}
          onChange={(e) =>
            setTemporaryObject((previousObject) => ({
              ...previousObject,
              type: e.target.value,
            }))
          }
          value={temporarayObject.type}
          className="min-w-full text-sky-500 text-lg bg-transparent outline-0 border-none"
        >
          <option>--Select--</option>
          <option>Tablet / Capsule</option>
          <option>Syrup</option>
          <option>Ointment</option>
          <option>Inhaler</option>
          <option>Injection</option>
          <option>Spray</option>
          <option>Drops</option>
        </select>
      </fieldset>
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medicine Dosage
        </legend>
        <input
          type="text"
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
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medication Frequency
        </legend>
        <select
          required={true}
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
          <option>--Select--</option>
          <option>Once a Day</option>
          <option>Twice a Day</option>
          <option>Thrice a Day</option>
        </select>
      </fieldset>
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Medication Time
        </legend>
        <input
          type="time"
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
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Starting Date
        </legend>
        <input
          type="date"
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
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Ending Date
        </legend>
        <input
          type="date"
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
      <fieldset className="border-2 border-solid border-sky-700 rounded-lg p-2 pt-0 my-2">
        <legend className="text-center text-mono text-sky-700 italic px-2">
          Instructions
        </legend>
        <textarea
          required={true}
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
