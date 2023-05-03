import { APPROVE_APPOINTMENT, REFUSE_APPOINTMENT } from '../constants/userConstants';



const initialState = 
{   appointments: [
   
    { name: 'John Doe', disease: 'Headache', date: '2023-05-01', approved: '' },
    { name: 'Jane Smith', disease: 'Fever', date: '2023-05-02', approved: '' },
    { name: 'Bob Johnson', disease: 'Cold', date: '2023-05-03', approved: '' },
    
  ] 
} 
;     


const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.map((appointment, index) => {
          if (index === action.payload) {
            return {
              ...appointment,
              approved: true
            };
          }
          return appointment;
        })
      };
    case REFUSE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.map((appointment, index) => {
          if (index === action.payload) {
            return {
              ...appointment,
              approved: false
            };
          }
          return appointment;
        })
      };
    default:
      return state;
  }
};

export default appointmentsReducer;
