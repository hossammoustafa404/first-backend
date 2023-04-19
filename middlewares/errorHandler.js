const errorHandler = (err, req, res, next) => {
  return res.status(500).json({ msg: `Something is going wrong.` });
};

module.exports = errorHandler;
