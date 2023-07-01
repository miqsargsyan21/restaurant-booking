const getAllPreorders = async (req, res) => {
  res.send('getAllPreorders');
};

const getPreorderById = async (req, res) => {
  res.send('getPreorderById');
};

const addPreorder = async (req, res) => {
  res.send('addPreorder');
};

const updatePreorder = async (req, res) => {
  res.send('updatePreorder');
};

const deletePreorder = async (req, res) => {
  res.send('deletePreorder');
};

export default {
  getAllPreorders,
  getPreorderById,
  updatePreorder,
  deletePreorder,
  addPreorder
};