const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/Items');
const app = express();
//body-parser Middleware
app.use(bodyParser.json());
//db config
const db = require('./config/Keys').mongoURI;
// connect  to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected ...'))
  .catch((err) => console.log(err));
//use routes
app.use('/api/Items', items);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
