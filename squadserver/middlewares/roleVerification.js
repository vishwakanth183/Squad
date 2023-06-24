const checkRole = (role) => {
    return (req, res, next) => {
      // Assuming your user object contains a 'role' property
      if (req.user && req.user.role === role) {
        next();
      } else {
        res.status(403).json({ error: `Unauthorized! This content is only accessible for ${role}` });
      }
    };
  }

  module.exports.checkRole = checkRole