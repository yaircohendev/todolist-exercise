const Pool = require("pg").Pool;
const credentials = require("./credentials.json");
const pool = new Pool(credentials);

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

exports.getUsers = getUsers;
