const db = require("./server/db");
const Campus = require("./server/db/models/campuses");
const Student = require("./server/db/models/students");

console.log("SEEDING!!!")

const campuses = [
  {
    name: "SVA",
    imageUrl: "notYet",
    description: "cute modern campus with lots of artsy people"
  },
  { name: "FIT", imageUrl: "notYet", description: "nice campus near chealsea" },
  {
    name: "PARSONS",
    imageUrl: "notYet",
    description: "Super expensive but worth it"
  },
  {
    name: "PRATT",
    imageUrl: "notYet",
    description: "In brooklyn you dont have to commute to the city"
  }
];

const students = [
  { firstName: "Ben", lastName: "Star", email: "ben@gmail.com", gpa: 3.8 },
  { firstName: "Jun", lastName: "Ko", email: "june@gmail.com", gpa: 2.8 },
  { firstName: "Fie", lastName: "Fie", email: "fefe@gmail.com", gpa: 4.0 },
  { firstName: "Elle", lastName: "Lo", email: "elo@gmail.com", gpa: 2.9 },
  { firstName: "Joe", lastName: "Bang", email: "bang@gmail.com", gpa: 3.9 },
  { firstName: "Lu", lastName: "Luu", email: "lulu@gmail.com", gpa: 3.1 },
  { firstName: "Um", lastName: "Ma", email: "Umma@gmail.com", gpa: 1.2 },
  { firstName: "Raf", lastName: "Simons", email: "raf@gmail.com", gpa: 3.1 },
  { firstName: "Toto", lastName: "Ro", email: "totoro@gmail.com", gpa: 1.9 }
];

const seed = () =>
  Promise.all(campuses.map(campus => Campus.create(campus))).then(() =>
    Promise.all(students.map(student => Student.create(student)))
  );

const main = () => {
  console.log("Syncing db...");
  db
    .sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
