require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.USERNAME_DB_LOCAL,
    "password": process.env.PASSWORD_DB_LOCAL || "",
    "database": "Parking-Apps",
    "host": process.env.HOST_DB_LOCAL,
    "dialect": process.env.DIALECT_DB_LOCAL
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
