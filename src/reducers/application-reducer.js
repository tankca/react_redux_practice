
const application = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PERSONAL_DETAILS':
      return {
        ...state,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        occupation: action.data.occupation,
        applicationType: action.data.applicationType,
        loanAmount: action.data.loanAmount
      }

    default:
      return state
  }

}

export default application