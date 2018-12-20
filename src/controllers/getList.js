const dbConnection = require("../../db/db_connection.js");
const path = require("path");
exports.post = (req, res) => {
  const name = req.body.name;
  // console.log(req.body.name);

  dbConnection.query(
    // return personId which contains people_id - to be passed in to bookings table
    "INSERT INTO users (full_name) VALUES ($1)",
    [name],
    (err, success) => {
      // console.log(personId); // logs out object for person, passed into bookings
      if (err) {
        return err;
      } else {
        // cb(null);
        console.log("inserted into data");
      }
    }
  );
};

exports.get = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "currentList.hbs"));
};

exports.get = (req, res) => {
  res.render("shoppingList");
};