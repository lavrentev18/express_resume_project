const {Sequelize} = require("sequelize");
const options = require("../config/database");

async function createDatabase(app) {
  const sequelize = new Sequelize(options.database, options.username, options.password, {
    host: options.host,
    port: options.port,
    dialect: options.dialect
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.set('__connection', sequelize);

  return function() {
    return sequelize.close();
  };
}

module.exports = createDatabase;


