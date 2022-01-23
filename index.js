const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require('./app/model/auth');
const db_pro = require('./app/model/user');
const db_posts = require('./app/model/posts');

// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Database with { force: true }');
});
db_pro.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Database with { force: true }');
});
db_posts.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Database with { force: true }');
});
// simple route
app.get('/', (req, res) => {
  res.json({ message: 'REUNION ASSIGNMENT.' });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/userpro.routes')(app);
require('./app/routes/posts.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
