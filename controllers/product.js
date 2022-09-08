export const createProduct = (req, res) => {
  res.json({ msg: "create product" });
};
export const readProducts = (req, res) => {
  res.json({ msg: "read products" });
};
export const readProduct = (req, res) => {
  const id = req.params.id;

  res.json({ msg: `read product ${id}` });
};
export const updateProduct = (req, res) => {
  const id = req.params.id;

  res.json({ msg: `update product ${id}` });
};
export const deleteProduct = (req, res) => {
  const id = req.params.id;

  res.json({ msg: `delete product ${id}` });
};
