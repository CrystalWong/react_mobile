import { ADDRESS } from '../constants/ActionTypes';

export const address = (address) => {
  console.log(address);
  console.log("action");
  address.type = ADDRESS;	
  return address;
}