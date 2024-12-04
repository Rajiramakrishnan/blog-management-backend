const emailValidation = (req, res, next) => {
  const { Email } = req.body;
  try {
    if (!Email) {
      return res.stats(404).json({ message: "email id required" });
    }
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailregex.test(Email)) {
      return res.status(400).send({ error: "Invalid email format" });
    }
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error on signup", error: err.message });
  }
};
module.exports = { emailValidation };
