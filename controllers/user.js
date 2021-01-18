exports.getUsers = (req, res) => {
  return res.send({ msg: "all users" });
};

exports.getUser = (req, res) => {
  return res.send({ msg: "single user" });
};
