const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise = require('bluebird');
const routes = require('./config/routes');
const errorHandler = require('./lib/errorHandler');
const customResponses = require('./lib/customResponses');

const { port, env, dbURI } = require('./config/environment');
const app = express();



app.use(morgan('dev'));

mongoose.connect(dbURI, {useMongoClient: true});
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(customResponses);
app.use('/api', routes);

app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));


module.exports = app; // Exports the app to import in when we run our tests
