import { NameInputModal } from "../components/Modal.jsx";
import { MedicationDetailsFormSubmissionModal } from "../components/Modal.jsx";
import { NavigationBar } from "../components/Navigation.jsx";
import { Dashboard } from "../components/Dashboard.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { MedicineDetails } from "../components/MedicineDetails.jsx";
import { MedicineList } from "../components/MedicineList.jsx";
import { CoverPage } from "../components/CoverPage.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [componentIndex, setComponentIndex] = useState(-1);
  const [userName, setUserName] = useState(() => {
    const localStorageData = window.localStorage.getItem("medicine-user-name");
    return localStorageData ? localStorageData : "";
  });
  useEffect(() => {
    window.localStorage.setItem("medicine-user-name", userName);
  }, [userName]);
  const [inputModalDisplay, setInputModalDisplay] = useState(true);
  useEffect(() => {
    const localStorageData = window.localStorage.getItem("medicine-user-name");
    localStorageData && setInputModalDisplay(false);
  }, []);
  const [displayComponent, setDisplayComponent] = useState(<CoverPage />);

  const initialMedicationData = [
    {
      name: "Oxymetazoline Hydrochloride",
      type: "Spray",
      dosage: "2 Sprays",
      frequency: "Once a Day",
      time: "20:00",
      startingDate: "2024-12-13",
      endingDate: "2024-12-18",
      instructions: "Medicine to be taken as per Physician!",
    },
    {
      name: "Acetaminophen",
      type: "Tablet",
      dosage: "1000mg",
      frequency: "Once a Day",
      time: "10:00",
      startingDate: "2024-12-14",
      endingDate: "2024-12-20",
      instructions: "Medicine to be taken as per Physician!",
    },
    {
      name: "Fexofenadine Hydrochloride",
      type: "Syrup",
      dosage: "1 Table Spoon",
      frequency: "Thrice a Day",
      time: "08:00",
      startingDate: "2024-12-15",
      endingDate: "2024-12-23",
      instructions: "Medicine to be taken as per Physician!",
    },
  ];

  // Retrieving Data from Local Storage
  const [medicineCardDetails, setMedicineCardDetails] = useState(() => {
    const localStorageData = window.localStorage.getItem("medication-data");
    return localStorageData
      ? JSON.parse(localStorageData)
      : initialMedicationData;
  });

  // Updating Data in the Local Storage
  useEffect(() => {
    window.localStorage.setItem(
      "medication-data",
      JSON.stringify(medicineCardDetails)
    );
  }, [medicineCardDetails]);

  // Conditionally Rendering the Components
  useEffect(() => {
    switch (componentIndex) {
      case 0:
        setDisplayComponent(
          <Dashboard
            userName={userName}
            medicineCardDetails={medicineCardDetails}
          />
        );
        break;
      case 1:
        setDisplayComponent(
          <MedicineDetails
            userName={userName}
            updateMedicineCardDetails={setMedicineCardDetails}
            updateShowSubmissionModal={setShowSubmissionModal}
          />
        );
        break;
      case 2:
        setDisplayComponent(
          <MedicineList
            userName={userName}
            medicineCardDetails={medicineCardDetails}
          />
        );
        break;
      default:
        setDisplayComponent(<CoverPage />);
    }
  }, [componentIndex]);

  const [showSubmissionModal, setShowSubmissionModal] = useState(false);

  return (
    <section>
      {inputModalDisplay && (
        <NameInputModal
          updateUserName={setUserName}
          updateInputModalDisplay={setInputModalDisplay}
        />
      )}
      {showSubmissionModal && <MedicationDetailsFormSubmissionModal />}
      <section className="md:flex md:flex-row md:items-start md:justify-stretch">
        <section
          className="p-2 flex flex-col gap-2 items-stretch justify-stretch
            md:basis-[30%] md:shrink-0 md:grow-0
            border-2 border-solid fancy-border md:border-none"
        >
          <NavigationBar updateComponentIndex={setComponentIndex} />
          <SideBar />
        </section>
        {displayComponent}
      </section>
    </section>
  );
}
