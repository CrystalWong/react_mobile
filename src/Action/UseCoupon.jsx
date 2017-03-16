import { COUPON_ID } from '../constants/ActionTypes';

export const useCoupon = (useCoupon) => {
  useCoupon.type = COUPON_ID;
  return useCoupon;
}