const passwordValidation = (password) => {
  let sample = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;

  return sample.test(password);
};

const usernameValidation = (username) => {
  let sample = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;

  return sample.test(username);
};

const nameValidation = (name) => {
  return typeof name === 'string' && name.length > 2 && name.length < 50;
};

const numberValidation = (number) => {
  return typeof number === 'number' && number > 0;
};

const statusValidation = (status) => {
  return status === 'free' || status === 'reserved';
}

const descriptionValidation = (description) => {
  return typeof description === 'string' && description.length > 2 && description.length < 255;
}

const validators = {
  description: descriptionValidation,
  password: passwordValidation,
  username: usernameValidation,
  status: statusValidation,
  number: numberValidation,
  name: nameValidation,
};

export default validators