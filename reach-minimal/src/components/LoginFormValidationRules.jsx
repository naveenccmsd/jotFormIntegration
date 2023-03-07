export default function validate(values) {
    let errors = {};
    if (!values.agentEmail) {
      errors.agentEmail = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.agentEmail)) {
      // errors.agentEmail = "Email address is invalid";
    }
  
    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 8) {
    //   errors.password = "Password must be 8 or more characters";
    // }

    // if (!values.clientState || values.clientState === "") {
    //   errors.clientState = "Field value required";
    // }

    // if (!values.acceptAgreement || values.acceptAgreement === "") {
    //   errors.acceptAgreement = "Must accept agreement";
    // }
  
    return errors;
  }
  