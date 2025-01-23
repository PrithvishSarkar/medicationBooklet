// Get the URL of the service worker
const url = new URL(self.location.href);
// Extract the 1st query parameter
const BACKEND_URI = url.searchParams.get("BACKEND_URI");
// Extract the 2nd query parameter
const PUBLIC_VAPID_KEY = url.searchParams.get("PUBLIC_VAPID_KEY");

// Function to convert 'base 64' to 'Array Buffer'
const urlB64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// This Self Event Listener works when the Service Worker just activates itself
self.addEventListener("activate", async () => {
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array(PUBLIC_VAPID_KEY),
  });
  await fetch(`${BACKEND_URI}/user-subscription`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subscription),
  });
});

/*
This Self Event Listener listens to any Push Event from Push Service
This invokes the 'Notification API' in Browser to display Push Notifications
*/
self.addEventListener("push", (e) => {
  const payloadData = e.data.json();
  self.registration.showNotification(payloadData.title, {
    body: payloadData.body,
    icon: "../capsule.png",
    tag: "medication-reminder",
    requireInteraction: true,
    renotify: true,
  });
});
