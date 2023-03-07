import React, { Component } from 'react'
import logo from '../logo.svg';
// import ClientInformationService from '../services/ClientInformationService';


class ClientFormsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.submitForm = this.submitForm.bind(this);
    }

    handleSubmit = () => this.props.handleSubmit(this.state)

    submitForm = (e) => {
        e.preventDefault();
        let formData = {};
        console.log('employee => ' + JSON.stringify(formData));
    }
    

    getTitle(){
        return <h3 className="text-center">NewmanLTC Online Quote Request</h3>
    }

    
    render() {
        return (
            <main>
            <div>
              <img className="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57" />
            </div>
            <div className="form-body bg-light">
              <div className="py-5 text-left">
          
                <h1>NewmanLTC Online Quote Request</h1>
                <p className="lead">All information collected on this web page is securely transmitted via our HIPAA compliant
                  collection database. If you would rather submit your information by phone, please call 800-625-9267, Option
                  1 or fax us at 952-888-5170.</p>
              </div>
              <hr className="my-12" />
          
              <div className="row g-5">
                <div className="col-md-12 col-lg-12">
                  <form className="needs-validation" name="myform" id="myform"  onSubmit={e => { e.preventDefault(); this.handleSubmit(); }}>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">Select one: </label> <br />
                        <input type="radio" className="form-check-input" id="onePartner" name="applyFor" value="onePartner"
                          checked="checked" required  onChange={(e) => this.setState({lastName: e.target.value})} /> Married/Partners - Both Applying<br />
                        <input type="radio" className="form-check-input" id="twoPartner" name="applyFor" placeholder="" value="twoPartner"
                          required  onChange={(e) => this.setState({lastName: e.target.value})} /> Married/Partners - Only one partner Applying<br />
                        <input type="radio" className="form-check-input" id="single" name="applyFor" placeholder="" value="single"
                          required  onChange={(e) => this.setState({lastName: e.target.value})} /> Single
                        <div className="invalid-feedback">
                          Valid selection is required.
                        </div>
                      </div>
                      <div className="col-sm-12"></div>
                      <div className="col-md-6">
                        <label htmlFor="country" className="form-label">State of Client Residence</label>
                        <select className="form-select" id="country" name="clientState" required>
                          <option value="">Please select...</option>
                          <option value="Albama">Albama</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid state.
                        </div>
                      </div>
                      <div className="col-sm-12"></div>
                      <div className="col-md-6">
                        <label htmlFor="country" className="form-label">Client Meeting Date </label>
                        <input type="date" className="form-control" name="clientMeetingDate" id="firstName" placeholder="" value=""
                          required="required" />
                        <div className="invalid-feedback">
                          Please select a valid date.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="country" className="form-label">Client Meeting Time </label>
                        <input type="time" className="form-control" name="clientMeetingTime" id="firstName" placeholder="" value=""
                          required />
                        <div className="invalid-feedback">
                          Please select a valid date.
                        </div>
                      </div>
          
                      <h2>Client Information </h2>
                      <hr className="my-12" />
                      <div className="col-sm-12"></div>
          
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">Client Name</label>
                        <input type="text" className="form-control" id="clientFirstName" name="clientFirstName" placeholder="First name" value="" required />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
          
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label app-margin-bottom" ></label>
                        <input type="text" className="form-control" id="clientLastName" name="clientLastName" placeholder="Last name" value="" required />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
          
          
          
                      <div className="col-6">
                        <label htmlFor="email" className="form-label">Date of Birth (or Age) <span className="text-muted"> *
                        </span></label>
                        <input type="text" className="form-control" id="email" name="clientDateOfBirth" placeholder="Client DOB or Age  " />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>
          
                      <div className="col-6">
                        <label htmlFor="clientGender" className="form-label">Client Gender <span className="text-muted"> *
                        </span></label><br />
                        <input type="radio" className="form-check-input" id="clientGender" name="clientGender" placeholder="" value="male"
                          required /> Male<br />
                        <input type="radio" className="form-check-input" id="clientGender" name="clientGender" placeholder="" value="female"
                          required /> Female<br />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>
          
                      <div className="col-12">
                        <label htmlFor="address" className="form-label">Client Medications with Dosage & Condition: </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="clientMedication"
                          placeholder="example : Lisinporil  3.7mg" rows="5"></textarea>
          
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
          
                      <div className="col-6">
                        <label htmlFor="address2" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="agentPhoneNumber" name="agentPhoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          maxLength="14" required="required" /><small>Format: 123-456-7890</small>
          
                      </div>
          
                      <div className="col-md-5">
                        <label htmlFor="country" className="form-label">Country</label>
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
          
                      <div className="col-md-4">
                        <label htmlFor="state" className="form-label">State</label>
                        <select className="form-select" id="state" name="agentState" required>
                          <option value="">Choose...</option>
                          <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
          
                      <div className="col-md-3">
                        <label htmlFor="zip" className="form-label">Agent Email</label>
                        <input type="email" className="form-control" id="agentEmail" name="agentEmail" placeholder="" required />
                        <div className="invalid-feedback">
                          Please enter Valid email.
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="zip" className="form-label">Agreement: Business Associate Agreement * </label> <br />
                        <input type="radio" className="form-check-input" id="formAcceptAgreement" name="formAcceptAgreement" placeholder="" required value="yes" /> Yes, I have read and
                        agree to the Business Associate Agreement.
                        <div className="invalid-feedback">
                          must accept agreement.
                        </div>
                      </div>
                    </div>
                    <div id="message"></div>
                    <hr className="my-4" />
                    <div className="col-md-12 text-center">
                      <button className="btn btn-success btn-lg btn-block" type="submit" >Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )
    }
}

export default ClientFormsComponent