const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4001;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/s33d-database-${env}`;

module.exports = { port, env, dbURI };
