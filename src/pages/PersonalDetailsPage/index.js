/* ------------- React ------------- */
import React, { Component } from 'react';

/* ------------- 3rd parties ------------- */
import { Field } from 'react-final-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/* ------------- Internal ------------- */
// Comonents
import WizardForm from '../../components/WizardForm';
// Actions
import * as ApplicationActions from '../../actions/application-actions';


const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

class PersonalDetailsPage extends Component {

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  onSubmit = async values => {
    await this.sleep(300)
    // console.log('values: ', values);
    this.props.addPersonalDetails(values)
    this.props.history.push('./confirmation')
  }

  render() {
    return (
      <div>
        <WizardForm
          onSubmit={this.onSubmit}
        >
          {/* First Name, Last Name, Occupation */}
          <WizardForm.Page>
            <h3>Please enter your personal details:</h3>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                validate={required}
              />
              <Error name="firstName" />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
                validate={required}
              />
              <Error name="lastName" />
            </div>
            <div>
              <label>Occupation</label>
              <Field
                name="occupation"
                component="input"
                type="text"
                placeholder="Occupation"
                validate={required}
              />
              <Error name="occupation" />
            </div>
          </WizardForm.Page>

          {/*Application Type, Loan Amount*/}
          <WizardForm.Page
            validate={values => {
              const errors = {}
              if (!values.applicationType) {
                errors.applicationType = 'Required'
              }
              if (!values.loanAmount) {
                errors.loanAmount = 'Required'
              }
              return errors
            }}
          >
            <h3>Please enter your loan type and amount:</h3>
            <div>
              <label>Application Type</label>
              <Field name="applicationType" component="select">
                <option />
                <option value="Mortgage">Mortgage</option>
                <option value="Car Loan">Car Loan</option>
                <option value="Personal Loan">Personal Loan</option>
              </Field>
              <Error name="applicationType" />
            </div>
            <div>
              <label>Loan Amount</label>
              <Field
                name="loanAmount"
                component="input"
                type="number"
                placeholder="Loan Amount"
              />
              <Error name="loanAmount" />
            </div>
          </WizardForm.Page>
        </WizardForm>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    applicationInfo: state.applicationInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPersonalDetails: (data) => {
      dispatch(ApplicationActions.addPersonalDetails(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PersonalDetailsPage))