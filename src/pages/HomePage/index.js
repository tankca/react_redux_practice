/* ------------- React ------------- */
import React, { Component } from 'react';

/* ------------- Internal ------------- */
// Comonents
import TextButton from '../../components/TextButton';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <TextButton
          text="Next"
          primary={true}
          to="./personal-details"
        >
          Next
        </TextButton>
      </div>
    )
  }
}

export default HomePage