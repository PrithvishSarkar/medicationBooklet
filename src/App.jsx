import { Footer } from "../components/Footer.jsx";
import { NameInputModal } from "../components/Modals.jsx";
import { MedicationDetailsFormSubmissionModal } from "../components/Modals.jsx";
import { UserGuideModal } from "../components/Modals.jsx";
import { DeleteLocalStorageData } from "../components/Modals.jsx";
import { NavigationBar } from "../components/Navigation.jsx";
import { Dashboard } from "../components/Dashboard.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { MedicineDetails } from "../components/MedicineDetails.jsx";
import { MedicineList } from "../components/MedicineList.jsx";
import { CoverPage } from "../components/CoverPage.jsx";
import { useState, useEffect } from "react";

export default function App() {
  // The 'componentIndex' State Variable is mapped to certain main components
  // It is used for dynamic display of main component
  // It is changed when the Navigation Buttons are clicked
  const [componentIndex, setComponentIndex] = useState(-1);

  // The 'userName' State Variable is used to capture the user's name
  // The User Name is displayed across all the main components
  // The 'userName' is stored in the Local Storage and fetched whenever required
  const [userName, setUserName] = useState(() => {
    const localStorageData = window.localStorage.getItem("medicine-user-name");
    return localStorageData ? localStorageData : "";
  });

  // A Side Effect runs whenever the 'userName' changes
  // Side Effect stored the 'userName' in the Local Storage
  useEffect(() => {
    window.localStorage.setItem("medicine-user-name", userName);
  }, [userName]);

  // The 'displayComponent' stores the main component that is to be displayed dynamically
  // By default, it is set to show the Cover Page when the App mounts
  const [displayComponent, setDisplayComponent] = useState(<CoverPage />);

  // This Medication Card Details data is used initially as an example or a dummy data
  // This data is just to make users familiar with the App
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

  // The 'medicineCardDetails' stores the actual data of all the medicines
  // It is an Array of Objects, where each Object stores one Medicine's Detail
  // This Array is stored in the Local Storage and retieved when required
  const [medicineCardDetails, setMedicineCardDetails] = useState(() => {
    const localStorageData = window.localStorage.getItem("medication-data");
    return localStorageData
      ? JSON.parse(localStorageData)
      : initialMedicationData;
  });

  // A Side Effect runs whenever the 'medicineCardDetails' State Variable changes
  // Side Effect stores the Medicine Details in the Local Storage
  useEffect(() => {
    window.localStorage.setItem(
      "medication-data",
      JSON.stringify(medicineCardDetails)
    );
  }, [medicineCardDetails]);

  // A Side Effect runs whenever the 'componentIndex' changes
  // Navigation Button click -> componentIndex changes
  // Side Effect updates the 'displayComponent' to render one of the main component
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

  // The 'showInputModal' either shows or hides the Modal to intake username
  // The Modal is only shown if there is no username in the Local Storage
  // The Modal when shown will take the username and update the 'userName' State Variable
  // The Input Modal is displayed by default in every render
  const [showInputModal, setShowInputModal] = useState(true);

  // A Side Effect runs whenever the application mounts
  // This Side Effect ensures that the Modal is only displayed if the Local Storage is empty
  useEffect(() => {
    const localStorageData = window.localStorage.getItem("medicine-user-name");
    localStorageData && setShowInputModal(false);
  }, []);

  // This invokes the Modal for successful submission of Medication details
  // This waives out the Modal after 2 seconds
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);

  // The User Guide Modal is displayed or erased depending on user's action
  const [showUserGuideModal, setShowUserGuideModal] = useState(false);

  // The Local Storage Deletion Modal is either shown or hidden
  // The Local Storage Data related to the App will be erased if "Delete" button is clicked
  // The Local Storage Data will not be erased if "Cancel" button is clicked
  const [showDeleteDataModal, setShowDeleteDataModal] = useState(false);

  return (
    <section>
      {showInputModal && (
        <NameInputModal
          updateUserName={setUserName}
          updateShowInputModal={setShowInputModal}
        />
      )}
      {showSubmissionModal && <MedicationDetailsFormSubmissionModal />}
      {showUserGuideModal && (
        <UserGuideModal updateShowUserGuideModal={setShowUserGuideModal} />
      )}
      {showDeleteDataModal && (
        <DeleteLocalStorageData
          updateShowDeleteDataModal={setShowDeleteDataModal}
          numberOfChecklist={medicineCardDetails.length}
        />
      )}
      <section className="md:flex md:flex-row md:items-start md:justify-stretch
      bg-white md:min-h-[100vh]">
        <section
          className="p-2 flex flex-col gap-2 items-stretch justify-stretch
            md:basis-[30%] md:shrink-0 md:grow-0
            border-2 border-solid fancy-border md:border-none"
        >
          <NavigationBar updateComponentIndex={setComponentIndex} />
          <SideBar
            updateShowUserGuideModal={setShowUserGuideModal}
            updateShowDeleteDataModal={setShowDeleteDataModal}
          />
        </section>
        {displayComponent}
      </section>
      <Footer />
    </section>
  );
}