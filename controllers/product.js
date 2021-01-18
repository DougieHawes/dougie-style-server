exports.getProducts = (req, res) => {
  return res.send({ msg: "all products" });
};

exports.getProduct = (req, res) => {
  return res.send({ msg: "single product" });
};
