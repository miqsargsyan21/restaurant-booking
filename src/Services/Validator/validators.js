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

const dateValidation = (dateString) => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  const isDateValid = !isNaN(inputDate);
  const isDateNotPast = inputDate >= currentDate;

  return isDateValid && isDateNotPast;
}

const timeValidation = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  const inputTime = new Date();
  inputTime.setHours(Number(hours), Number(minutes), 0, 0);

  const openingTime = new Date();
  openingTime.setHours(10, 0, 0, 0);

  const closingTime = new Date();
  closingTime.setHours(24, 0, 0, 0);

  return inputTime >= openingTime && inputTime <= closingTime;
}

const validators = {
  description: descriptionValidation,
  password: passwordValidation,
  username: usernameValidation,
  status: statusValidation,
  number: numberValidation,
  date: dateValidation,
  time: timeValidation,
  name: nameValidation,
};

export default validators