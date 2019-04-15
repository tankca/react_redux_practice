/* ------------- React ------------- */
import React, { Component } from 'react';

/* ------------- Internal ------------- */
// Comonents
import TextButton from '../../components/TextButton';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>Success!</h1>
        <TextButton
          primary={true}
          to="./"
        >
          Restart
        </TextButton>
      </div>
    )
  }
}

export default HomePage