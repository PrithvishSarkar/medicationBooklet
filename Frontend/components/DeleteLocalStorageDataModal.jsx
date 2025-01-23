import "../src/tailwind.css";

// updateShowDeleteDataModal -> Updates whether or not the Delete Modal should be displayed
// numberOfChecklist -> Length of the main Medication Details Array
function DeleteLocalStorageDataModal({
  updateShowDeleteDataModal,
  numberOfChecklist,
}) {
  // This function unregisters the Service Worker
  const disablePushNotifications = async () => {
    try {
      console.info("Inside Disable Push Notification Function!");
      const serviceWorkerRegistration = await window.navigator.serviceWorker
        .ready;
      const isUnregistered = await serviceWorkerRegistration.unregister();
      isUnregistered
        ? console.info("Service Worker Unregistered Successfully!")
        : console.warn("Service Worker cannot be Unregistered!");
      window.location.reload();
    } catch (err) {
      console.error("Disable Push Notification Error: ", err);
    }
  };
  // This function runs when the "Delete" button is clicked
  // This function removes all the Local Storage Data related to this Application
  const handleDeleteLocalStorage = () => {
    window.localStorage.removeItem("medication-data");
    window.localStorage.removeItem("medicine-user-name");
    window.localStorage.removeItem("medication-disable-button-status");
    for (let index = 0; index < numberOfChecklist; index++)
      window.localStorage.removeItem(`medicine-checklist-${index}`);
    disablePushNotifications();
    window.location.reload();
  };

  return (
    <section
      className={
        "min-w-full min-h-[100vh] bg-transparent backdrop-blur-md fixed"
      }
    >
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        p-4 min-w-[90%] md:min-w-[40%] min-h-[60%] sm:min-h-[50%]
        border-none rounded-lg bg-rose-300"
      >
        <p className="mb-2 text-center text-2xl font-medium font-sans text-neutral-800">
          <span className="font-bold text-red-800">Warning!!</span> <br />
          You will lose all the stored data and the application will load again!{" "}
          <br />
          <br />
          Do you really want to delete?
        </p>
        <button
          onClick={handleDeleteLocalStorage}
          className="px-4 py-1 border-none outline-0 rounded-md
        bg-red-600 text-white text-lg font-bold absolute bottom-2 left-4"
        >
          Delete
        </button>
        <button
          onClick={() => updateShowDeleteDataModal(false)}
          className="px-4 py-1 border-none outline-0 rounded-md
        bg-emerald-600 text-white text-lg font-bold absolute bottom-2 right-4"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export { DeleteLocalStorageDataModal };
