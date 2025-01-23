import "../src/tailwind.css";

// This card contains all the medicine details and is displayed on Dashboard
function MedicationCard({ medicineCardDetails }) {
  return (
    <section className="p-2 rounded-lg border border-amber-500 bg-amber-200">
      <p
        className="my-2 text-center text-lg font-mono 
        border-b-2 border-double border-amber-500"
      >
        Your entire list of medicines
      </p>

      {/* This Unordered List contains all the details of all the medicines */}
      <ul className="lg:flex lg:flex-row lg:flex-wrap lg:items-stretch lg:justify-start">
        {medicineCardDetails.map((medicineCardInfo, index) => (
          <li
            key={index}
            className="my-2 pl-2 border-l-4 border-l-amber-500 lg:max-w-[50%]"
          >
            <p>
              Medicine Name:{" "}
              <span className="font-semibold italic text-neutral-800">
                {medicineCardInfo.name}
              </span>
            </p>
            <p>
              Medicine Type:{" "}
              <span className="font-semibold italic text-neutral-800">
                {medicineCardInfo.type}
              </span>
            </p>
            <p>
              Medicine Dosage:{" "}
              <span className="font-semibold italic text-neutral-800">
                {medicineCardInfo.dosage}
              </span>
            </p>
            <p>
              Medicine Time:{" "}
              <span className="font-semibold italic text-neutral-800">
                {medicineCardInfo.time}
              </span>
            </p>
            <p>
              Frequency:{" "}
              <span className="font-semibold italic text-neutral-800">
                {medicineCardInfo.frequency}
              </span>
            </p>
            <p>
              Instructions:{" "}
              <span className="font-semibold italic text-neutral-800">
                {medicineCardInfo.instructions}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export { MedicationCard };
