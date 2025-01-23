import "../src/tailwind.css";
import { Button } from "./Button.jsx";
import { useState, useEffect } from "react";

// updateShowUserGuideModal -> Updates the Boolean State Variable (in Main.jsx)
// updateShowDeleteDataModal -> Updates the Boolean State Variable (in Main.jsx)
// displaySideBar -> Boolean Variable which dictates whether or not to display the Side Bar
// An appropriate Modal is displayed whenever the buttons are clicked
function SideBar({
  updateShowUserGuideModal,
  updateShowDeleteDataModal,
  displaySideBar,
}) {
  // This State Variable tells whether or not to display the "Disable Notifications" button
  const [disableButtonDisplay, setDisableButtonDisplay] = useState(() => {
    const localStorateData = window.localStorage.getItem(
      "medication-disable-button-status"
    );
    return localStorateData ? JSON.parse(localStorateData) : false;
  });
  useEffect(() => {
    window.localStorage.setItem(
      "medication-disable-button-status",
      JSON.stringify(disableButtonDisplay)
    );
  }, [disableButtonDisplay]);

  const date = new Date().toDateString();

  const checkEssentials = () => {
    if (!("serviceWorker" in navigator))
      throw new Error("Service Worker is not supported in your browser!");
    if (!("PushManager" in window))
      throw new Error("Push Manager is not supported in your browser!");
    if (!("Notification" in window))
      throw new Error("Notification is not supported in your browser!");
  };
  const notificationRequest = async () => {
    try {
      const permissionValue = await Notification.requestPermission();
      if (permissionValue !== "granted") {
        alert("Notification Permissionn is not granted!");
        throw new Error("Your won't get any Medicine Reminder Notification");
      } else console.info("Notification Permission granted!");
      return permissionValue;
    } catch (err) {
      console.error("Notification Permission Error: ", err);
    }
  };
  const registerServiceWorker = async () => {
    try {
      const permissionValue = await notificationRequest();
      if (permissionValue === "granted") {
        const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
        const PUBLIC_VAPID_KEY = import.meta.env.VITE_PUBLIC_VAPID_KEY;
        await window.navigator.serviceWorker.register(
          `/medicationBooklet/serviceWorker.js?BACKEND_URI=${BACKEND_URI}&PUBLIC_VAPID_KEY=${PUBLIC_VAPID_KEY}`
        );
        const serviceWorkerRegistration = await window.navigator.serviceWorker
          .ready;
        console.info(serviceWorkerRegistration.active.state);
      }
    } catch (err) {
      console.error("Service Worker Registration Error: ", err);
    }
  };
  const enablePushNotifications = async () => {
    checkEssentials();
    await registerServiceWorker();
    console.info("Service Worker Registration Successful!");
    setDisableButtonDisplay(true);
  };
  const disablePushNotifications = async () => {
    try {
      console.info("Inside Disable Push Notification Function!");
      const serviceWorkerRegistration = await window.navigator.serviceWorker
        .ready;
      const isUnregistered = await serviceWorkerRegistration.unregister();
      isUnregistered
        ? console.info("Service Worker Unregistered Successfully!")
        : console.warn("Service Worker cannot be Unregistered!");
      setDisableButtonDisplay(false);
      window.location.reload();
    } catch (err) {
      console.error("Disable Push Notification Error: ", err);
    }
  };

  return (
    <section
      className={`md:flex ${
        displaySideBar ? "flex" : "hidden"
      } flex-col items-stretch justify-between gap-1 bg-rose-200 p-2 rounded-lg text-xs`}
    >
      <span className="font-mono font-semibold">Date: {date}</span>

      {/*
      Shows either Enable or Disable Push Notifications
      Asks user to allow Push Notifications when user clicks on 'Enable Notifications'
      Unregisters the Service Worker when the user clicks on 'Disable Notifications'
      */}
      {disableButtonDisplay ? (
        <Button onClick={disablePushNotifications}>
          Disable Notifications
        </Button>
      ) : (
        <Button onClick={enablePushNotifications}>Enable Notifications</Button>
      )}

      {/* This Button invokes a Modal to Delete all the data from the Local Storage */}
      <Button onClick={() => updateShowDeleteDataModal(true)}>
        Delete All Data
      </Button>

      {/* 
      This Button invokes a "User Guide" Modal
      The "User Guide" Modal contains information to navigate and use this application
      */}
      <Button onClick={() => updateShowUserGuideModal(true)}>User Guide</Button>

      {/* This button redirects to my GitHub repository for this Application */}
      <Button
        onClick={() =>
          window.open(
            "https://github.com/PrithvishSarkar/medicationBooklet/",
            "_blank"
          )
        }
      >
        Learn More
      </Button>
    </section>
  );
}
export { SideBar };
