import "../src/tailwind.css";
import { MedicineListCard } from "./MedicineListCard.jsx";
import { useState, useEffect } from "react";

function MedicineList({ userName, medicineCardDetails }) {
  return (
    <section className="p-2 m-2 md:ml-0 md:grow rounded-lg bg-gray-100">
      <p className="font-bold font-serif text-base text-right p-2">
        Medicine List
      </p>
      <p
        className="font-extrabold font-sans text-2xl text-center pb-1 mb-4
      border-solid border-b-2 medication-details-border"
      >
        Hello, {userName}!
      </p>
      <ul
        className="mt-4 flex flex-col items-stretch justify-center gap-2 
        lg:flex-row lg:items-stretch lg:justify-start lg:flex-wrap"
      >
        {medicineCardDetails.map((medicineCardInfo, index) => (
          <li key={index} className="lg:max-w-[48%]">
            <MedicineListCard
              medicineCardInfo={medicineCardInfo}
              uniqueID={index}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
export { MedicineList };
