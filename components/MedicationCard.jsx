import "../src/tailwind.css";

function MedicationCard({ date, medicineCardDetails }) {
  return (
    <section
      className={`p-2 rounded-lg border-solid border ${
        date === "Today"
          ? "bg-emerald-200 border-emerald-500"
          : "bg-amber-200 border-amber-500"
      }`}
    >
      <p
        className={`my-2 text-center text-lg font-mono 
          border-b-2 border-double ${
            date === "Today" ? "border-emerald-500" : "border-amber-500"
          }`}
      >
        Medicine to be taken{" "}
        <span className="font-extrabold italic text-indigo-800">{date}</span>
      </p>
      <ul className="">
        {medicineCardDetails.map((medicineCardInfo, index) => (
          <li
            key={index}
            className={`my-2 pl-2 border-l-4 ${
              date === "Today" ? "border-l-emerald-500" : "border-l-amber-500"
            }`}
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
