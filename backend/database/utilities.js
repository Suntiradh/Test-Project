const jwt = require('jsonwebtoken');

const generateToken = (targetUser) => {
  return jwt.sign(
    {
      _id: targetUser._id,
      name: targetUser.name,
      email: targetUser.email,
      isAdmin: targetUser.isAdmin,
    },
    process.env.SECRET_OR_KEY|| 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
};

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.SECRET_OR_KEY || 'somethingsecret',
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

module.exports = {
  generateToken,
  isAuth
}