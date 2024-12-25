const managerOnlyMiddleware = (req, res, next) => {
   if (req.user.role !== 'manager') {
      return res.status(403).json({
         success: false,
         message: "Access denied. Manager role required.",
      });
   }
   next();
};

module.exports = managerOnlyMiddleware;