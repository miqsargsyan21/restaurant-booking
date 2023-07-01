const getAllTables = async (req, res) => {
  res.send('Hello world!');
}

const getTableById = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
}

const addTable = async (req, res) => {
  res.send('Hello world!');
}

const updateTable = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
}

const deleteTable = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
}

export {
  getAllTables,
  getTableById,
  updateTable,
  deleteTable,
  addTable
}