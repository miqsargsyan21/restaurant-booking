import { User } from '../models/index.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const addUser = async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  try {
    const user = await User.create({
      firstName,
      lastName,
      username,
      password,
    });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, username, password } = req.body;

  try {
    const user = await User.update({
      firstName,
      lastName,
      username,
      password,
    }, {
      where: {
        id: userId,
      },
    });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    await User.destroy({
      where: {
        id: userId,
      },
    });

    res.status(200).json({
      success: true,
      message: `User with id ${userId} deleted`,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

export {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addUser
};