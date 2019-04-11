/* ------------- React ------------- */
import React, { Component } from 'react'

/* ------------- 3rd parties ------------- */
import { connect } from 'react-redux'

/* ------------- Internal ------------- */
// Comonents
import TextButton from '../../components/TextButton'


class ConfirmationPage extends Component {

  render() {
    return (
      <form>
        <h3>Please confirm your application details</h3>
        <div className="content-row">
          <label>First Name:</label>
          <span>{this.props.applicationInfo.firstName}</span>
        </div>
        <div className="content-row">
          <label>Last Name:</label>
          <span>{this.props.applicationInfo.lastName}</span>
        </div>
        <div className="content-row">
          <label>Occupation:</label>
          <span>{this.props.applicationInfo.occupation}</span>
        </div>
        <div className="content-row">
          <label>Application Type:</label>
          <span>{this.props.applicationInfo.applicationType}</span>
        </div>
        <div className="content-row">
          <label>Loan Amount:</label>
          <span>${this.props.applicationInfo.loanAmount}</span>
        </div>

        <TextButton
          text="Next"
          primary={true}
          to="./success"
        >
          Confirm
        </TextButton>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    applicationInfo: state.applicationInfo
  }
}

export default connect(mapStateToProps)(ConfirmationPage)