use cohort;
db.dropDatabase();

use cohort;

db.students.insert(
  [
    {
      name: "Harrison",
      favouriteLanguage: "Java"
    },
    {
      name: "Dave",
      favouriteLanguage: "Javascript"
    },
    {
      name: "Rory",
      favouriteLanguage: "Javascript"
    },
    {
      name: "Lorna",
      favouriteLanguage: "Ruby"
    }
  ]
)
