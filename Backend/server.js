const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const webpush = require("web-push");
const dotenv = require("dotenv");
const cron = require("node-cron");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;
const apiKeys = {
  publicVapidKey: process.env.PUBLIC_VAPID_KEY,
  privateVapidKey: process.env.PRIVATE_VAPID_KEY,
};

webpush.setVapidDetails(
  `mailto:${process.env.MAIL_TO}`,
  apiKeys.publicVapidKey,
  apiKeys.privateVapidKey
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let medicationData = null,
  subscriptionData = null,
  currentCron = null;

app.post("/medicine-details", (req, res) => {
  medicationData = req.body;
  console.info("Medicine Data is received in Backend!");
  if (subscriptionData) {
    notificationScheduler(subscriptionData, medicationData);
    console.info(
      "Updated Medicine Details! \tNotification Scheduler Function was called!"
    );
  } else console.info("Subscription Data is still null");
  res.json({ status: "Success", message: "Medicine Data is retrieved!" });
});

app.post("/user-subscription", (req, res) => {
  subscriptionData = req.body;
  if (subscriptionData) {
    notificationScheduler(subscriptionData, medicationData);
    console.info(
      "Subscription Done! \tNotification Scheduler Function was called!"
    );
    res.json({ status: "Success", message: "Notification Send from Server!" });
  } else console.info("User is not subscribed to the Push Service!!");
});

const notificationScheduler = (subscription, array) => {
  if (currentCron) {
    currentCron.stop();
    console.info("Existing Corn is stopped!");
  }

  // The 1st argument takes 5 space-seperated values
  // "minutes hours month-date month week-day" OR "0-59 0-23 1-31 JAN-DEC SUN-SAT"
  currentCron = cron.schedule(
    "* * * * *",
    async () => {
      // The 1st argument "* * * * *" means that the function will run every minute
      try {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const timeNow = hours + ":" + minutes;
        for (let index = 0; index < array.length; index++) {
          if (
            timeNow === array[index].time &&
            date >= new Date(array[index].startingDate) &&
            date <= new Date(array[index].endingDate)
          ) {
            try {
              console.info("Index is: ", index);
              payload = JSON.stringify({
                title: "Please take your medicines!",
                body: array[index].name,
              });
              await webpush.sendNotification(subscription, payload);
              console.info(`Push Notification sent for ${array[index].name}`);
            } catch (err) {
              console.error(
                `Push Notification Error for ${array[index].name}`,
                err
              );
            }
          }
        }
      } catch (err) {
        console.error("Scheduling Error: ", err);
      }
    },
    { timezone: "Asia/Kolkata" }
  );
};

app.listen(PORT, () =>
  console.info(`Backend Server listening to port ${PORT}`)
);
