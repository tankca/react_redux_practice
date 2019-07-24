// import { takeLatest, select, call, put } from 'redux-saga/effects'

// // watcher saga is the default export
// // if you register the worker instead of the watcher, the code in the worker will execute as soon as the app is initiated.
// export default function* watchTypeToListenFor() {
//     // takeLatest()L if you dispatch the action before the previous API call finishes, it will stop the call and return only the latest one.
//     // takeEvery() allows multiple instances of these sagas to run at the same time.
//     // both behaves synchronously.
//     yield takeLatest('TYPE_TO_LISTEN_FOR', workerSaga)
//     // good place to chain API calls.
//     // just yield another work with takeLatest(‘TYPE_TO_LISTEN_FOR_SUCCESS’, nextWorkerSaga)
// }


// // worker saga has an optional parameter - action. It gives you access to the dispatched action.
// export function* workerSaga(action) {
//     // workerSaga code
//     // Part of the workSaga's job is to handle errors. So we use try-catch.
//     try {
//         // select() gets data from the redux store.
//         const thingsFromReduxStore = yield select(state => state.data)
//         const { things, from, action } = action.data
//         const payload = { things, from, action, thingsFromReduxStore }
//         // call() executes a given method with given arguments declaratively(not execute straightaway).
//         const data = yield call(apiFetch, payload)

//         // put dispatches an action
//         yield put({ type: 'ACTION_SUCCESS', data })
//     } catch (error) {
//         yield put({ type: 'ACTION_ERROR', error })
//     }
// }

// export function* nextWorkerSaga() {

// }
