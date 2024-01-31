const setUserId = (req, res, next) => {
 if (req.user) {
 }
 next();
};

module.exports = { setUserId };
