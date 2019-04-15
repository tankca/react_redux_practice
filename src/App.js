/* ------------- React ------------- */
import React, { Component } from 'react'

/* ------------- 3rd parties ------------- */
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore } from 'redux'

/* ------------- Internal ------------- */
// Style
import Styles from './styles'
// Main Reducer
import rootReducer from './reducers'
// Comonents
import HomePage from './pages/HomePage'
import PersonalDetailsPage from './pages/PersonalDetailsPage'
import ConfirmationPage from './pages/ConfirmationPage'
import SuccessPage from './pages/SuccessPage'


const store = createStore(rootReducer)
class App extends Component {
  render() {
    return (
      <Styles>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path='/' component={HomePage}></Route>
              <Route exact path='/personal-details' component={PersonalDetailsPage}></Route>
              <Route exact path='/confirmation' component={ConfirmationPage}></Route>
              <Route exact path='/success' component={SuccessPage}></Route>
            </div>
          </Router>
        </Provider>
      </Styles>
    );
  }
}

export default App;
