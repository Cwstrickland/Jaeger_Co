const auth = require('basic-auth');

/**
 * Create a basic authentication middleware function that checks
 * against the given credentials.
 */
exports.basicAuth = (username, password) => {
  if (!username || !password) {
    throw new Error('Missing required username and/or password.');
  }

  return (req, res, next) => {
    const user = auth(req);

    if (user && user.name === username && user.pass === password) {
      next();
    } else {
      res
        .set({ 'WWW-Authenticate': 'Basic realm="Authentication required"' })
        .status(401)
        .end("Whoa, there buddy. Not so fast...");
    }
  };
};
