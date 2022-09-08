export const readUsers = (req, res) => {
  res.json({ msg: "read users" });
};
export const readUser = (req, res) => {
  const id = req.params.id;

  res.json({ msg: `read user ${id}` });
};
export const updateUser = (req, res) => {
  const id = req.params.id;

  res.json({ msg: `update user ${id}` });
};
export const deleteUser = (req, res) => {
  const id = req.params.id;

  res.json({ msg: `delete user ${id}` });
};
