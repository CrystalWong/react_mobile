import { REGISTER } from '../constants/ActionTypes';

export const register = (login) => {
  return {
    type: REGISTER,
    login
  }
}

// export function registerUuid() {
//   return (dispatch, getState) => {
//     dispatch({
//             type: REGISTER,
//             login: "1111111"
//         });
//   };
// }

// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   };
// }

// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   };
// }

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

// export function incrementAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, 1000);
//   };
// }
