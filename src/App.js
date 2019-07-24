/* ------------- React ------------- */
import React, { Component } from 'react'

/* ------------- 3rd parties ------------- */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { ConnectedRouter } from 'connected-react-router'

/* ------------- Internal ------------- */
// Style
import Styles from './styles'
// Main Reducer
import rootReducer from './reducers'
// Saga
import rootSaga from './sagas'
// Comonents
import HomePage from './pages/HomePage'
import PersonalDetailsPage from './pages/PersonalDetailsPage'
import ConfirmationPage from './pages/ConfirmationPage'
import SuccessPage from './pages/SuccessPage'

import ScrollToTop from './components/ScrollToTop'

// const sagaMiddleware = createSagaMiddleware()
// const enhancers = composeWithDevTools(
//   applyMiddleware(sagaMiddleware)
// )

const store = createStore(rootReducer)

// sagaMiddleware.run(rootSaga)

class App extends Component {
  render() {
    return (
      <Styles>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <ScrollToTop>
              <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/personal-details' component={PersonalDetailsPage}></Route>
                <Route exact path='/confirmation' component={ConfirmationPage}></Route>
                <Route exact path='/success' component={SuccessPage}></Route>
              </Switch>
            </ScrollToTop>
          </ConnectedRouter>
        </Provider>
      </Styles>
    );
  }
}

export default App;
