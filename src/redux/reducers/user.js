// import { NAME_USER, EMAIL_USER, NUMBER_USER } from "../actions/user.js";

// const initialState = {
//   Name: NAME_USER,
//   Email: EMAIL_USER,
//   Number: NUMBER_USER,
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case NAME_USER:
//       return {
//         ...state,
//         Name: NAME_USER,
//       };
//     case EMAIL_USER:
//       return {
//         ...state,
//         Name: EMAIL_USER,
//       };
//     case NUMBER_USER:
//       return {
//         ...state,
//         Name: NUMBER_USER,
//       };
//   }
// };

// export default userReducer;

import { NAME_USER, EMAIL_USER, NUMBER_USER } from "../actions/userActions";

const initialState = {
  name: "",
  email: "",
  number: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_USER:
      return { ...state, name: action.payload }; // Update name
    case EMAIL_USER:
      return { ...state, email: action.payload }; // Update email
    case NUMBER_USER:
      return { ...state, number: action.payload }; // Update number
    default:
      return state;
  }
};

export default userReducer;
