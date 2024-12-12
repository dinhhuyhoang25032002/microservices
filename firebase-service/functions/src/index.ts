import {onRequest} from "firebase-functions/v2/https";

import {onValueUpdated} from "firebase-functions/v2/database";

import {initializeApp} from "firebase-admin/app";
import {getDatabase} from "firebase-admin/database";

const app = initializeApp({databaseURL: "https://mkadmin-fb19f-default-rtdb.firebaseio.com"});
const db = getDatabase(app);

// const startOfDay = new Date();
// startOfDay.setHours(0, 0, 0, 0); // Đặt giờ, phút, giây, và mili giây về 0
// const timestamp = startOfDay.getTime();

export const helloWorld = onRequest((request, response) => {
  response.json({abc: "fghfdgh"});
  console.log("đâsdasd");
});

export const trackMaxHumidity = onValueUpdated("/111940895397757860901afc/node1/dailyHumidy/1733418000/highestHumidy", async (event) => {
  const newValue = await event.data.after.val();
  if (newValue === null) {
    console.log("No new value to update.");
    return null;
  }
  try {
    const maxValueRef = db.ref("/111940895397757860901afc/node1/dailyHumidy/1733418000/maxvalue");
    console.log("maxValueRef", maxValueRef);
    const snapshot = await maxValueRef.once("value");
    console.log("snapshot", snapshot);
    const currentMaxValue = await snapshot.val();
    console.log("currentMaxValue", currentMaxValue);
    if (currentMaxValue === null || newValue > currentMaxValue) {
      await maxValueRef.set(newValue);
      // console.log(`Updated maxvalue to: ${newValue}`);
    } else {
      console.log("No update needed, current maxvalue is higher.");
    }
  } catch (error) {
    console.error("Error updating maxvalue:", error);
  }
  return null;
});
