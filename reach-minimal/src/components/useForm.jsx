import { useState, useEffect } from "react";
import React from "react";
import { isValidValue } from "./LoginFormValidationRules";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [localEvent, setEvents] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reCaptchaRef = React.createRef();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }else if(Object.keys(errors).length > 0 && isSubmitting){
      scrollToError();
    }
  }, [errors]);
  const scrollToError = () => {
    if(Object.keys(errors).length > 0){
      const element = document.getElementsByClassName('help is-danger');
      if (element && element[0]) {
        element[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
      }
    }
  };
  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    localEvent.formSubmitClicked = true;
    setErrors(validate(values));
    
  };

  const handleChange = event => {
    event.persist();
    if (isValidValue(event.target.name, event.target.value)) {
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
      setIsSubmitting(false);
      if (localEvent.formSubmitClicked === true) {
        setErrors(validate(values));
      }
      if (values.applyFor !== "Married / Partners - Both applying together") {
        Object.entries(values).forEach(([key, value]) => {
          if (key.startsWith("partner"))
            delete values[key];
        });
      }
    }

  };

  const refreshToken = async () => {
    const timeTaken = Date.now() - localEvent.captchaLoaded;
    if (!localEvent.captchaLoaded || timeTaken > 60000) {
      localEvent.captchaToken = await reCaptchaRef.current.executeAsync();
      localEvent.captchaLoaded = Date.now();
      console.log("Token Has refreshed  : " + localEvent.captchaLoaded);
    } else {
      console.log("using existing token : " + localEvent.captchaLoaded);
    }
  };

  const addLocalEvent = (key, value) => {
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
    refreshToken,
    values,
    errors,
    localEvent,
    reCaptchaRef
  };
};

export default useForm;
