function isAdmin(req, res, next) {
    if (req.body.isAdmin) {
      next();
    } else {
      res.status(403).send(`Sorry but you are not an admin and you do not have access to route ${req.url}`);
    }
  }

module.exports= isAdmin;