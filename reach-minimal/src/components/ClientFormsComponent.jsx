import useForm from "./useForm";
import React from "react";
import validate from "./LoginFormValidationRules";
import ClientInformationService from '../services/ClientInformationService';


const ClientFormsComponent = () => {
  const { values, localEvent, handleChange, errors, handleSubmit, resetForm, enableLoading, disableLoading } = useForm(login, validate);
  if (!values.applyFor) {
    values.applyFor = "1";
  }
  function login() {
    console.log(values);
    let formData = values;
    enableLoading()
    ClientInformationService.createFormEntry(formData).then(res => {
      disableLoading()
      resetForm()
    });
  }
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-10 is-offset-1">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Select one:</label>
                  <div className="control">
                    <div className="column is-full">
                      <label className="radio" htmlFor="applyFor-0">
                        <input type="radio" name="applyFor" id="applyFor-0" value="1" checked={values.applyFor === "1"} onChange={handleChange} />
                        &nbsp;&nbsp; Married / Partners - Both applying together
                      </label>
                      <br />
                      <label className="radio" htmlFor="applyFor-1">
                        <input type="radio" name="applyFor" id="applyFor-1" value="2" checked={values.applyFor === "2"} onChange={handleChange} />
                        &nbsp;&nbsp; Married / Partners - Only one partner applying
                      </label>
                      <br />
                      <label className="radio" htmlFor="applyFor-2">
                        <input type="radio" name="applyFor" id="applyFor-2" value="3" checked={values.applyFor === "3"} onChange={handleChange} />
                        &nbsp;&nbsp; Single
                      </label>
                    </div>
                  </div>
                  {errors.applyFor && <p className="help is-danger">{errors.applyFor}</p>}
                </div>
              </div>
              <h2 className="title is-4">Client Information</h2>
              <hr />
              <div className="columns">
                <div className="field column is-half">
                  <label className="label" htmlFor="selectbasic-0">State of Client Residence <label className="has-text-danger">*</label></label>
                  <div className="control">
                    <div className="select is-half">
                      <select id="selectbasic-0" name="clientState" onChange={handleChange} >
                        <option value="">Please Select</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                      </select>
                    </div>
                    {errors.clientState && <p className="help is-danger">{errors.clientState}</p>}
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Client Meeting Date</label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.meetingDate && "is-danger"}`}
                      type="date"
                      name="meetingDate"
                      onChange={handleChange}
                      value={values.meetingDate || ""}
                      required
                    />
                    {errors.meetingDate && <p className="help is-danger">{errors.meetingDate}</p>}
                  </div>
                </div>
                <div className="field column is-one-quarter">
                  <label className="label">Client Meeting Time</label>
                  <div className="control">
                    <input
                      className={`input ${errors.meetingTime && "is-danger"}`}
                      type="time"
                      name="meetingTime"
                      onChange={handleChange}
                      value={values.meetingTime || ""}
                      required
                    />
                  </div>
                  {errors.meetingTime && <p className="help is-danger">{errors.meetingTime}</p>}
                </div>
              </div>
              {/* -- Client Information Start  -- */}
              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Client Name <label className="has-text-danger">*</label></label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.clientFirstName && "is-danger"}`}
                      type="text"
                      name="clientFirstName"
                      onChange={handleChange}
                      value={values.clientFirstName || ""}
                      placeholder="Client First Name"
                      required
                    />
                    {errors.clientFirstName && <p className="help is-danger">{errors.clientFirstName}</p>}
                  </div>
                </div>
                <div className="field column">
                  <label className="label"></label>
                  <div className="control app-margin-top ">
                    <input
                      className={`input ${errors.clientLastName && "is-danger"}`}
                      type="text"
                      name="clientLastName"
                      onChange={handleChange}
                      value={values.clientLastName || ""}
                      placeholder="Client Last Name"
                      required
                    />
                  </div>
                  {errors.clientLastName && <p className="help is-danger">{errors.clientLastName}</p>}
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Date of Birth (or Age) <label className="has-text-danger">*</label></label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.clientAge && "is-danger"}`}
                      type="text"
                      name="clientAge"
                      onChange={handleChange}
                      value={values.clientAge || ""}
                      placeholder="Client DOB or Age"
                      required
                    />
                    {errors.clientAge && <p className="help is-danger">{errors.clientAge}</p>}
                  </div>
                </div>
                <div className="field column">
                  <label className="label">Client Gender <label className="has-text-danger">*</label></label>
                  <div className="control">
                    <label className="radio" htmlFor="clientGender-0">
                      <input type="radio" name="clientGender" id="clientGender-0" value="Male" checked="checked" onChange={handleChange} />
                      Male
                    </label> <br />
                    <label className="radio" htmlFor="clientGender-1">
                      <input type="radio" name="clientGender" id="clientGender-1" value="Female" onChange={handleChange} />
                      Female
                    </label>
                  </div>
                  {errors.clientGender && <p className="help is-danger">{errors.clientGender}</p>}
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Last Complete Physical</label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.clientLastPhysicalComplete && "is-danger"}`}
                      type="text"
                      name="clientLastPhysicalComplete"
                      onChange={handleChange}
                      value={values.clientLastPhysicalComplete || ""}
                      placeholder="Date"
                      required
                    />
                    {errors.clientLastPhysicalComplete && <p className="help is-danger">{errors.clientLastPhysicalComplete}</p>}
                  </div>
                </div>
                <div className="field column">
                  <label className="label">Tobacco/Nicotine Use</label>
                  <div className="control">
                    <label className="radio" htmlFor="clientTobaccoNicUse-0">
                      <input type="radio" name="clientTobaccoNicUse" id="clientTobaccoNicUse-0" value="yes" checked="checked" onChange={handleChange} />
                      Yes
                    </label> <br />
                    <label className="radio" htmlFor="clientTobaccoNicUse-1">
                      <input type="radio" name="clientTobaccoNicUse" id="clientTobaccoNicUse-1" value="no" onChange={handleChange} />
                      No
                    </label>
                  </div>
                  {errors.clientTobaccoNicUse && <p className="help is-danger">{errors.clientTobaccoNicUse}</p>}
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Height</label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.clientHeight && "is-danger"}`}
                      type="text"
                      name="clientHeight"
                      onChange={handleChange}
                      value={values.clientHeight || ""}
                      placeholder="Client Height"
                      required
                    />
                    {errors.clientHeight && <p className="help is-danger">{errors.clientHeight}</p>}
                  </div>
                </div>
                <div className="field column">
                  <label className="label">Weight</label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.clientWeight && "is-danger"}`}
                      type="text"
                      name="clientWeight"
                      onChange={handleChange}
                      value={values.clientWeight || ""}
                      placeholder="Client Weight"
                      required
                    />
                  </div>
                  {errors.clientWeight && <p className="help is-danger">{errors.clientWeight}</p>}
                </div>
              </div>

              <div className="columns">
                <div className="field column is-full">
                  <label className="label">Client Medications with Dosage & Condition:</label>
                  <div className="control">
                    <textarea className={`textarea ${errors.clientMedication && "is-danger"}`} rows="6" id="clientMedication-0"
                      name="clientMedication"
                      placeholder="Example: Lisinopril 37.5mg 1x day for Hypertension.">
                    </textarea>
                    {errors.clientMedication && <p className="help is-danger">{errors.clientMedication}</p>}
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="field column is-full">
                  <label className="label">Client Surgeries or Other Health Concerns:</label>
                  <div className="control">
                    <textarea className={`textarea ${errors.clientHealth && "is-danger"}`} rows="6" id="clientHealth-0"
                      name="clientHealth"
                      placeholder="Example: Knee surgery in March 2018. No complications. Completely recovered.">
                    </textarea>
                    {errors.clientHealth && <p className="help is-danger">{errors.clientHealth}</p>}
                  </div>
                </div>
              </div>
              {/* -- Client Information End  -- */}
              <div className={`${values.applyFor === "3" && "displayNone"}`}>
                <h2 className="title is-4">Spouse/Partner Information</h2>
                <hr />

                {/* -- Partner Information Start  -- */}
                <div className="columns">
                  <div className="field column is-half">
                    <label className="label">Spouse/Partner</label>
                    <div className="control">
                      <input
                        autoComplete="off"
                        className={`input ${errors.partnerFirstName && "is-danger"}`}
                        type="text"
                        name="partnerFirstName"
                        onChange={handleChange}
                        value={values.partnerFirstName || ""}
                        placeholder="First Name"
                        required
                      />
                      {errors.partnerFirstName && <p className="help is-danger">{errors.partnerFirstName}</p>}
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label"></label>
                    <div className="control app-margin-top ">
                      <input
                        className={`input ${errors.partnerLastName && "is-danger"}`}
                        type="text"
                        name="partnerLastName"
                        onChange={handleChange}
                        value={values.partnerLastName || ""}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    {errors.partnerLastName && <p className="help is-danger">{errors.partnerLastName}</p>}
                  </div>
                </div>

                <div className="columns">
                  <div className="field column is-half">
                    <label className="label">Spouse Date of Birth (or Age)</label>
                    <div className="control">
                      <input
                        autoComplete="off"
                        className={`input ${errors.partnerAge && "is-danger"}`}
                        type="text"
                        name="partnerAge"
                        onChange={handleChange}
                        value={values.partnerAge || ""}
                        placeholder="Client DOB or Age"
                        required
                      />
                      {errors.partnerAge && <p className="help is-danger">{errors.partnerAge}</p>}
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label">Spouse Gender</label>
                    <div className="control">
                      <label className="radio" htmlFor="partnerGender-0">
                        <input type="radio" name="partnerGender" id="partnerGender-0" value="Male" checked="checked" onChange={handleChange} />
                        Male
                      </label> <br />
                      <label className="radio" htmlFor="partnerGender-1">
                        <input type="radio" name="partnerGender" id="partnerGender-1" value="Female" onChange={handleChange} />
                        Female
                      </label>
                    </div>
                    {errors.partnerGender && <p className="help is-danger">{errors.partnerGender}</p>}
                  </div>
                </div>

                <div className="columns">
                  <div className="field column is-half">
                    <label className="label">Spouse Last Complete Physical</label>
                    <div className="control">
                      <input
                        autoComplete="off"
                        className={`input ${errors.partnerLastPhysicalComplete && "is-danger"}`}
                        type="text"
                        name="partnerLastPhysicalComplete"
                        onChange={handleChange}
                        value={values.partnerLastPhysicalComplete || ""}
                        placeholder="Date"
                        required
                      />
                      {errors.partnerLastPhysicalComplete && <p className="help is-danger">{errors.partnerLastPhysicalComplete}</p>}
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label">Tobacco/Nicotine Use</label>
                    <div className="control">
                      <label className="radio" htmlFor="partnerTobaccoNicUse-0">
                        <input type="radio" name="partnerTobaccoNicUse" id="partnerTobaccoNicUse-0" value="yes" checked="checked" onChange={handleChange} />
                        Yes
                      </label> <br />
                      <label className="radio" htmlFor="partnerTobaccoNicUse-1">
                        <input type="radio" name="partnerTobaccoNicUse" id="partnerTobaccoNicUse-1" value="no" onChange={handleChange} />
                        No
                      </label>
                    </div>
                    {errors.partnerTobaccoNicUse && <p className="help is-danger">{errors.partnerTobaccoNicUse}</p>}
                  </div>
                </div>

                <div className="columns">
                  <div className="field column is-half">
                    <label className="label">Height</label>
                    <div className="control">
                      <input
                        autoComplete="off"
                        className={`input ${errors.partnerHeight && "is-danger"}`}
                        type="text"
                        name="partnerHeight"
                        onChange={handleChange}
                        value={values.partnerHeight || ""}
                        placeholder="Spouse Height"
                        required
                      />
                      {errors.partnerHeight && <p className="help is-danger">{errors.partnerHeight}</p>}
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label">Weight</label>
                    <div className="control">
                      <input
                        autoComplete="off"
                        className={`input ${errors.partnerWeight && "is-danger"}`}
                        type="text"
                        name="partnerWeight"
                        onChange={handleChange}
                        value={values.partnerWeight || ""}
                        placeholder="Spouse Weight"
                        required
                      />
                    </div>
                    {errors.partnerWeight && <p className="help is-danger">{errors.partnerWeight}</p>}
                  </div>
                </div>

                <div className="columns">
                  <div className="field column is-full">
                    <label className="label">Spouse/Partner Medications with Dosage & Condition:</label>
                    <div className="control">
                      <textarea className={`textarea ${errors.partnerMedication && "is-danger"}`} rows="6" id="partnerMedication-0"
                        name="partnerMedication"
                        placeholder="Example: Lisinopril 37.5mg 1x day for Hypertension." onChange={handleChange}>
                      </textarea>
                      {errors.partnerMedication && <p className="help is-danger">{errors.partnerMedication}</p>}
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="field column is-full">
                    <label className="label">Spouse/Partner Surgeries or Other Health Concerns:</label>
                    <div className="control">
                      <textarea className={`textarea ${errors.partnerHealth && "is-danger"}`} rows="6" id="partnerHealth-0"
                        name="partnerHealth"
                        placeholder="Example: Knee surgery in March 2018. No complications. Completely recovered." onChange={handleChange} >
                      </textarea>
                      {errors.partnerHealth && <p className="help is-danger">{errors.partnerHealth}</p>}
                    </div>
                  </div>
                </div>
              </div>
              {/* -- Partner/Spouse Information End  -- */}


              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Target Premium, Benefit or Carrier Preferences?</label>
                  <div className="control">
                    <textarea className={`textarea ${errors.moreDetails && "is-danger"}`} rows="6" id="moreDetails-0"
                      name="moreDetails"
                      placeholder="Example: $1500-$15000/month, Inflation, # of years, Add'l RidersType here..." onChange={handleChange}>
                    </textarea>
                    {errors.moreDetails && <p className="help is-danger">{errors.moreDetails}</p>}
                  </div>
                </div>
                <div className="field column is-half">
                  <label className="label">Have you been working with anyone at Newman LTC?</label>
                  <div className="control">
                    <textarea className={`textarea ${errors.priorExperience && "is-danger"}`} rows="6" id="priorExperience-0"
                      name="priorExperience"
                      placeholder="Have you been working with anyone at Newman LTC?" onChange={handleChange} >
                    </textarea>
                    {errors.priorExperience && <p className="help is-danger">{errors.priorExperience}</p>}
                  </div>
                </div>
              </div>

              <h2 className="title is-4">Agent Information</h2>
              <hr />
              {/* -- Agent Information Start  -- */}
              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Agent Name <label className="has-text-danger">*</label></label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.agentFirstName && "is-danger"}`}
                      type="text"
                      name="agentFirstName"
                      onChange={handleChange}
                      value={values.agentFirstName || ""}
                      placeholder="First Name"
                      required
                    />
                    {errors.agentFirstName && <p className="help is-danger">{errors.agentFirstName}</p>}
                  </div>
                </div>
                <div className="field column">
                  <label className="label"></label>
                  <div className="control app-margin-top ">
                    <input
                      className={`input ${errors.agentLastName && "is-danger"}`}
                      type="text"
                      name="agentLastName"
                      onChange={handleChange}
                      value={values.agentLastName || ""}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  {errors.agentLastName && <p className="help is-danger">{errors.agentLastName}</p>}
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Phone Number <label className="has-text-danger">*</label></label>
                  <div className="control">
                    <input
                      className={`input ${errors.agentPhoneNumber && "is-danger"}`}
                      type="tel"
                      name="agentPhoneNumber"
                      onChange={handleChange}
                      value={values.agentPhoneNumber || ""}
                      placeholder="123-4567-8901"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                    />
                  </div>
                  {errors.agentPhoneNumber && <p className="help is-danger">{errors.agentPhoneNumber}</p>}
                </div>
                <div className="field column is-half">
                  <label className="label" htmlFor="selectbasic-0">Agent Residence State <label className="has-text-danger">*</label></label>
                  <div className="control">
                    <div className="select">
                      <select id="selectbasic-0" name="agentState" onChange={handleChange} >
                        <option value="">Please Select</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                      </select>
                    </div>
                    {errors.agentState && <p className="help is-danger">{errors.agentState}</p>}
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Agent Email <label className="has-text-danger">*</label></label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.agentEmail && "is-danger"}`}
                      type="email"
                      name="agentEmail"
                      onChange={handleChange}
                      placeholder="example@example.com"
                      value={values.agentEmail || ""}
                      required
                    />
                    {errors.agentEmail && <p className="help is-danger">{errors.agentEmail}</p>}
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label className="label">Agreement: Business Associate Agreement <label className="has-text-danger">*</label> </label>
                  <div className="control">
                    <label className="radio" htmlFor="acceptAgreement-0">
                      <input type="radio" name="acceptAgreement" id="acceptAgreement-0" value="yes" required onChange={handleChange} />
                      &nbsp;&nbsp;Yes, I have read and agree to the Business Associate Agreement.
                    </label>
                    {errors.acceptAgreement && <p className="help is-danger">{errors.acceptAgreement}</p>}
                  </div>
                </div>
              </div>
              <hr />
              <div className="has-text-centered">
                <button type="submit" className={`button is-medium is-responsive is-primary ${localEvent.loading}`} onChange={handleChange} >
                  &nbsp;&nbsp;&nbsp; Submit &nbsp;&nbsp;&nbsp;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  );
};

export default ClientFormsComponent;
