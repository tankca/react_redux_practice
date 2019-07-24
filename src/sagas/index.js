import { all } from 'redux-saga/effects'
import WatcherSaga from './Saga'
// import WatcherSaga2 from './Saga2'

/*
  function* - generator function. Function which can be exited and reentered with the same context as when you exited.
  Whereever you see yield, the execution flow will exit this function, run what comes after the yield, and then return to
  the next line in the generator.
*/
export default function* rootSaga() {
  /*
    all() function.
    without it, app will still work, but watchersaga2 will wait for watchersaga to finish before it starts.
    With all(), both will start at the same time.
  */
  yield all([
    WatcherSaga(),
    // WatcherSaga2(),
  ])
}