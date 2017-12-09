const db = require("./server/db");
const Campus = require("./server/db/models/campuses");
const Student = require("./server/db/models/students");

const campuses = [
  {
    name: "PINE",
    imageUrl: "https://image.ibb.co/f4uDNw/campus_logos_0000_Layer_6.jpg",
    description: "cute modern campus with lots of artsy people"
  },
  {
    name: "KENSINGTON",
    imageUrl: "https://image.ibb.co/m6nB9b/campus_logos_0001_Layer_5.jpg",
    description: "nice campus near chealsea"
  },
  {
    name: "GREEN",
    imageUrl: "https://image.ibb.co/kM202w/campus_logos_0002_Layer_4.jpg",
    description: "Super expensive but worth it"
  },
  {
    name: "ACE",
    imageUrl: "https://image.ibb.co/gzSYNw/campus_logos_0003_Layer_3.jpg",
    description: "In brooklyn you dont have to commute to the city"
  }
];

const students = [
  { firstName: "Ben", lastName: "Star", email: "ben@gmail.com", gpa: 3.8, campusId: 3 },
  { firstName: "Jun", lastName: "Ko", email: "june@gmail.com", gpa: 2.8, campusId: 2  },
  { firstName: "Fie", lastName: "Fie", email: "fefe@gmail.com", gpa: 4.0, campusId: 1  },
  { firstName: "Elle", lastName: "Lo", email: "elo@gmail.com", gpa: 2.9, campusId: 4  },
  { firstName: "Joe", lastName: "Bang", email: "bang@gmail.com", gpa: 3.9, campusId: 3  },
  { firstName: "Lu", lastName: "Luu", email: "lulu@gmail.com", gpa: 3.1, campusId: 2  },
  { firstName: "Um", lastName: "Ma", email: "Umma@gmail.com", gpa: 1.2, campusId: 1  },
  { firstName: "Raf", lastName: "Simons", email: "raf@gmail.com", gpa: 3.1, campusId: 4  },
  { firstName: "Toto", lastName: "Ro", email: "totoro@gmail.com", gpa: 1.9, campusId: 3  },
  { firstName: "Bear", lastName: "Claw", email: "bear@gmail.com", gpa: 3.1, campusId: 2  },
  { firstName: "JJ", lastName: "Bean", email: "coffee@gmail.com", gpa: 3.8, campusId: 1  },
  {firstName: "Fines", lastName: "Wells", email: "fefines@gmail.com", gpa: 3.0, campusId: 4 },
  { firstName: "Ellesa", lastName: "Loou", email: "elosaaa@gmail.com", gpa: 1.9, campusId: 2
  },
  {firstName: "Greg", lastName: "Coffes", email: "sleepy@gmail.com", gpa: 3.9, campusId: 3
  },
  { firstName: "Lucky", lastName: "Sven", email: "luluck@gmail.com", gpa: 4.0, campusId: 1  },
  {
    firstName: "Star",
    lastName: "Bucks",
    email: "twinkle@gmail.com",
    gpa: 3.2, campusId: 4
  },
  { firstName: "Matin", lastName: "Simo", email: "raffe@gmail.com", gpa: 3.8, campusId: 3  },
  {
    firstName: "TotoZle",
    lastName: "Guwoe",
    email: "totorochubby@gmail.com",
    gpa: 1.3, campusId: 2
  },
  { firstName: "Haha", lastName: "Mudo", email: "haha@gmail.com", gpa: 3.8, campusId: 1  }
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
