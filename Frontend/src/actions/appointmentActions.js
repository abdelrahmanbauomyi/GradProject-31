import { APPROVE_APPOINTMENT, REFUSE_APPOINTMENT } from '../constants/userConstants';


export const approveAppointment = (index) => async(dispatch) => {
 
  dispatch({
    type: APPROVE_APPOINTMENT,
    payload: index
  });
};

export const refuseAppointment = (index) => async(dispatch) => {
  dispatch( {
    type: REFUSE_APPOINTMENT,
    payload:index
  });
};