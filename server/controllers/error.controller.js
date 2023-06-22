module.exports = {
  createError: (statusCode, message) => {
    const err = new Error(message);
    err.status = statusCode;
    return err;
  },
};
