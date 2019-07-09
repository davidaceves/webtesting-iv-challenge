const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove
};

async function insert(car) {
  const [id] = await db("cars").insert(car);
  return db("cars")
    .where({ id })
    .first();
}
function remove(id) {
  return db("cars")
    .where({ id })
    .del();
}
