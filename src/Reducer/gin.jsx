import {REGISTER} from '../constants/ActionTypes';

export default function login(login = "wy", action) {
console.log("**********************");	
console.log(action);	
console.log("**********************");
  switch (action.type) {
  case REGISTER:
    return action.login;
  default:
    return login;
  }
}

