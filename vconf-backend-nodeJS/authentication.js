const jwt = require("jsonwebtoken");
const utils = require("./utils");
const config = require("./config");

// middleware to check if the request has received with
// a valid and verified token
// scenario 1: token is missing: send 401
// scenario 2: token is invalid: send 401
// scenario 3: token is valid and verified: call the next()
function authorizeUser(request, response, next) {
  // token will not be available for signin, signup and activate urls
  if (
    request.url == "/admin/signin" ||
    request.url.startsWith("/vehicles/image")
  ) {
    // no token is required for these APIs
    next();
  } else {
    // all these APIs require the token
    const token = request.headers["token"];
    if (!token) {
      // do not call next() as the user id is missing

      // token is missing
      response.status(401);
      response.send(utils.createResult("token is missing"));
    } else {
      // token is sent in the headers
      try {
        // verify the token and get the id
        const data = jwt.verify(token, config.secret);

        // add the user id in the request object
        // so that we can share this in all the APIs
        request.userId = data.id;

        // go to the next function
        next();
      } catch (ex) {
        // do not call next() as the user id is missing
        response.status(401);
        response.send(utils.createResult("invalid token"));
      }
    }
  }
}

module.exports = authorizeUser;
