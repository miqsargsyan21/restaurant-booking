const getAllUsers = async (req, res) => {
  res.send('Hello world!');
};

const getUserById = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
};

const addUser = async (req, res) => {
  res.send('Hello world!');
};

const updateUser = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
};

const deleteUser = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
};

export {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addUser
}