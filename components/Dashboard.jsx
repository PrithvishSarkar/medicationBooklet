import "../src/tailwind.css";
import profile from "/profile.png";
import { MedicationCard } from "./MedicationCard.jsx";

function Dashboard({ userName, medicineCardDetails }) {
  return (
    <section
      data-type="dashboard-container"
      className="p-2 m-2 md:ml-0 md:grow rounded-lg bg-gray-100"
    >
      <p className="font-bold font-serif text-base text-right p-2">Dashboard</p>
      <p className="flex flex-row gap-1 items-center justify-start mb-4">
        <img src={profile} alt="your image" className="max-w-12 max-h-12" />
        <span className="font-extrabold font-sans text-3xl">{userName}</span>
      </p>
      <section
        data-type="medication-reminder-card"
        className="mt-4 flex flex-col items-stretch justify-center gap-2 
        lg:flex-row lg:items-start lg:justify-center"
      >
        <MedicationCard date="Today" medicineCardDetails={medicineCardDetails} />
        <MedicationCard date="Tomorrow" medicineCardDetails={medicineCardDetails} />
      </section>
    </section>
  );
}
export { Dashboard };
