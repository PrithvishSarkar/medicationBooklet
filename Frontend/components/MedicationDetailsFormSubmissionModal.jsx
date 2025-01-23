import "../src/tailwind.css";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

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
