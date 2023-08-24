import validators from "./validators.js";

export default function validate (data, rules) {
  let isValid = true

  for (let rule of rules) {
    const {
      validator,
      field
    } = rule;

    isValid = validators[validator](data[field]) && isValid
  }

  return isValid
}