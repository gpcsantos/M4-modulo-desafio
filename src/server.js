const app = require('./app');
const db = require('./repositories/db');

db.sync().then(async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`App ONLINE na porta: ${port}`);
});
