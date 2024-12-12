const fs = require("fs");
const path = require("path");
db = db.getSiblingDB("openlab");

db.createCollection("courses");
db.createCollection("users");
db.createCollection("histories");
db.createCollection("lessons");
db.createCollection("payments");
db.createCollection("shoppingcarts");

const coursesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "openlab.courses.json"), "utf8")
);
const usersData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "openlab.users.json"), "utf8")
);
const historiesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "openlab.histories.json"), "utf8")
);
const paymentsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "openlab.payments.json"), "utf8")
);
const shoppingcartsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "openlab.shoppingcarts.json"), "utf8")
);
const lessonsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "openlab.lessons.json"), "utf8")
);

db.courses.insertMany(coursesData);
db.users.insertMany(usersData);
db.histories.insertMany(historiesData);
db.payments.insertMany(paymentsData);
db.shoppingcarts.insertMany(shoppingcartsData);
db.lessons.insertMany(lessonsData);
