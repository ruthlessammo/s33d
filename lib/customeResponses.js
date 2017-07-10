function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  res.badRequest = function badRequest(errors) {
    const err = new Error('Bad Request');
    err.status = 400;
    err.errors = errors;

    throw err;
  };

  next();
}

module.exports = customResponses;
