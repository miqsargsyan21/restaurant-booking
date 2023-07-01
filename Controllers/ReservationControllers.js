const getAllReservations = async (req, res) => {
  res.send('Hello world!');
};

const getReservationById = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
};

const addReservation = async (req, res) => {
  res.send('Hello world!');
};

const updateReservation = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
};

const deleteReservation = async (req, res) => {
  res.send(`Hello world! ${req.params.id}`);
};

export {
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  addReservation
};