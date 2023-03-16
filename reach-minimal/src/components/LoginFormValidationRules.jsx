export function normalizeInput(name, value) {
  if (!value || !name) return value;
  if (name === "agentPhoneNumber" && value.length > 0)
    return normalizePhoneNumber(value);

  return value;
};

function normalizePhoneNumber(value) {
  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;
  if (cvLength < 4) return currentValue;
  if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
  return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
}

export default function validate(values) {
  let errors = {};
  let required = "This field is required.";

  if (!values.agentEmail) {
    errors.agentEmail = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.agentEmail)) {
    errors.agentEmail = "Email address is invalid";
  }
  if (!values.agentPhoneNumber) {
    errors.agentPhoneNumber = required;
  } else if (values.agentPhoneNumber.length < 14) {
    errors.agentPhoneNumber = "Input Valid Phone Number";
  }


  // if (!values.password) {
  //   errors.password = "Password is required";
  // } else if (values.password.length < 8) {
  //   errors.password = "Password must be 8 or more characters";
  // }

  if (!values.clientState) errors.clientState = required;
  if (!values.clientFirstName) errors.clientFirstName = required;
  if (!values.clientLastName) errors.clientLastName = required;
  if (!values.clientAge) errors.clientAge = required;
  if (!values.clientGender) errors.clientGender = required;
  if (!values.agentFirstName) errors.agentFirstName = required;
  if (!values.agentLastName) errors.agentLastName = required;
  if (!values.agentState) errors.agentState = required;
  if (!values.agentEmail) errors.agentEmail = required;
  if (!values.acceptAgreement) errors.acceptAgreement = required;

  return errors;
}


