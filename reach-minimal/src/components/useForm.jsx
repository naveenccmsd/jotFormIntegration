import { useState, useEffect } from "react";
import React from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [localEvent, setEvents] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reCaptchaRef = React.createRef();

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
    refreshToken();
    console.log(values);
    if (localEvent.formSubmitClicked === true) {
      setErrors(validate(values));
    }
    if (values.applyFor === "Single") {
      Object.entries(values).map(([key, value]) => {
        if (key.startsWith("partner"))
          delete values[key];
      });
    }


  };

  const refreshToken = event => {
    if (!localEvent.captchaLoaded || localEvent.captchaLoaded === false) {
      reCaptchaRef.current.execute();
    }
  };

  const addLocalEvent = (key,value) => {
    setEvents(localEvent => ({ ...localEvent, [key]: value }));
  }
   
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
    addLocalEvent,
    values,
    errors,
    localEvent,
    reCaptchaRef
  };
};

export default useForm;
