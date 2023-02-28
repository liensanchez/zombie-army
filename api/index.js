require('dotenv').config();
const app = require('./app');
const sequelize = require('./src/libs/database/database');

const { PORT } = process.env;

async function main() {
  try {
    await sequelize.sync({ force: false, logging: false });
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();