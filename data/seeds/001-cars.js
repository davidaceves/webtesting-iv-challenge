exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("cars")
    .truncate()
    .then(function() {
      return knex("cars").insert([
        { make: "VW", model: "GTI", year: 1986 },
        { make: "BMW", model: "M3", year: 2016 },
        { make: "Ford", model: "Raptor", year: 2020 }
      ]);
    });
};
