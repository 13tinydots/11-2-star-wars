// manages the data

const rootPath = new URL("../..", import.meta.url).pathname;
let DATA = [
  {
    route: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000,
  },
  {
    route: "darth-maul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200,
  },
  {
    route: "obi-wan-kenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 42,
    forcePoints: 1350,
  },
];
// console.log(fs, "characters");
// IIFE - Immediately Invoked Function Expression
// (async () => {
//   DATA = await fs.readFile(`${rootPath}db.json`, "utf8");
//   console.log(DATA);
// })();
