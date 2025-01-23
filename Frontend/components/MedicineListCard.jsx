import "../src/tailwind.css";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

// medicineCardInfo -> Object the contains details of each medicine
// uniqueID -> INDEX of the List Item when rendered inside an Unordered List
// This Medicine List Card is used in Medicine List
function MedicineListCard({ medicineCardInfo, uniqueID, onDelete }) {
  // An Array is required to store how many days of medication is prescribed
  // It is an Array of Objects where the Object is {dateString, isDone}
  const startDate = new Date(medicineCardInfo.startingDate);
  const endDate = new Date(medicineCardInfo.endingDate);
  const numberOfDays = (endDate - startDate) / 1000 / 3600 / 24;
  const medicationDuration = Math.round(numberOfDays);
  const tempArray = [];
  for (let index = 0; index <= medicationDuration; index++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + index);
    tempArray.push({ dateString: date.toDateString(), isDone: false });
  }

  // This Array stores the dates from Starting Date to Ending Date along with a Checklist
  // The initial value of this Array is the Array defined above (Temorary Array)
  // The State Variable Array fetched data from Local Storage
  const [medicineChecklistArray, setMedicineChecklistArray] = useState(() => {
    const localStorageData = window.localStorage.getItem(
      `medicine-checklist-${uniqueID}`
    );
    return localStorageData ? JSON.parse(localStorageData) : tempArray;
  });

  // A Side Effect is run to store the updated Checklist Array in the Local Storage
  useEffect(() => {
    window.localStorage.setItem(
      `medicine-checklist-${uniqueID}`,
      JSON.stringify(medicineChecklistArray)
    );
  }, [medicineChecklistArray]);

  // This function runs whenever the value of the Checklist is changed
  // This function updates the Checklist State Variable Array
  const handleChecklistChange = (i) => {
    setMedicineChecklistArray((previousArray) =>
      previousArray.map((item, index) =>
        index === i ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <section
      className="rounded-lg border border-emerald-500 bg-emerald-200 
      min-h-full p-2"
    >
      <p className="flex flex-row items-center justify-between text-xl">
        <span className="font-serif font-semibold text-neutral-800">
          Have I taken my medicine?
        </span>
        <button onClick={onDelete}>
          <MdDelete color="#9f1239" />
        </button>
      </p>

      {/* This Unordered List contains the Dates and the corresponding Checklist */}
      <ul className="mb-4">
        {medicineChecklistArray.map((item, index) => (
          <li
            className={`flex flex-row items-center justify-between px-2 my-1 rounded-sm 
            medicine-list-card-items-background-image text-sm font-semibold italic`}
            key={index}
          >
            <span>{item.dateString}</span>
            <input
              type="checkbox"
              checked={item.isDone}
              onChange={() => handleChecklistChange(index)}
            />
          </li>
        ))}
      </ul>

      {/* This Unordered List contains the Medicine Details of individual medicines */}
      <ul className="pl-2 border-l-4 border-l-emerald-500">
        <li>
          Medicine Name:{" "}
          <span className="font-semibold italic text-neutral-800">
            {medicineCardInfo.name}
          </span>
        </li>
        <li>
          Medicine Type:{" "}
          <span className="font-semibold italic text-neutral-800">
            {medicineCardInfo.type}
          </span>
        </li>
        <li>
          Medicine Dosage:{" "}
          <span className="font-semibold italic text-neutral-800">
            {medicineCardInfo.dosage}
          </span>
        </li>
        <li>
          Medicine Time:{" "}
          <span className="font-semibold italic text-neutral-800">
            {medicineCardInfo.time}
          </span>
        </li>
        <li>
          Frequency:{" "}
          <span className="font-semibold italic text-neutral-800">
            {medicineCardInfo.frequency}
          </span>
        </li>
        <li>
          Instructions:{" "}
          <span className="font-semibold italic text-neutral-800">
            {medicineCardInfo.instructions}
          </span>
        </li>
      </ul>
    </section>
  );
}
export { MedicineListCard };
