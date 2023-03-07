import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [localEvent, setEvents] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    localEvent.formSubmitClicked = true;
    setErrors(validate(values));
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setIsSubmitting(false);
    if (localEvent.formSubmitClicked === true) {
      setErrors(validate(values));
    }
  };

  const enableLoading = event => {
    setEvents(localEvent => ({ ...localEvent, "loading": "is-loading" }));
  };
  const disableLoading = event => {
    setEvents(localEvent => ({ ...localEvent, "loading": "not-loading" }));
  };

  const resetForm = event => {
    setValues({});
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    handleChange,
    handleSubmit,
    resetForm,
    enableLoading,
    disableLoading,
    values,
    errors,
    localEvent
  };
};

export default useForm;
