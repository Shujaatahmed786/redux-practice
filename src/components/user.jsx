// import { useDispatch, useSelector } from "react-redux";
// import { nameUser, emailUser, numberUser } from "../redux/actions/userActions";

// const User = () => {
//   const dispatch = useDispatch();
//   const userState = useSelector((state) => state.nameUser);

//   const handleName = () => {
//     dispatch(nameUser());
//   };

//   const handleEmail = () => {
//     dispatch(emailUser());
//   };

//   const handleNumber = () => {
//     dispatch(numberUser());
//   };
//   console.log(handleName, handleEmail, handleEmail);
//   return (
//     <div className="flex flex-col justify-center space-y-5 items-center">
//       <input
//         type="text"
//         placeholder="Name"
//         onClick={handleName}
//         className="border"
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         onClick={handleEmail}
//         className="border"
//       />
//       <input
//         type="number"
//         placeholder="Number"
//         onClick={handleNumber}
//         className="border"
//       />
//     </div>
//   );
// };

// export default User;

import { useDispatch, useSelector } from "react-redux";
import { nameUser, emailUser, numberUser } from "../redux/actions/userActions";
import { useState } from "react";

const User = () => {
  const dispatch = useDispatch();

  // Local state for input fields
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });

  // Get Redux state
  const userState = useSelector((state) => state.user);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Dispatch actions when inputs change
  const handleSubmit = () => {
    dispatch(nameUser(user.name));
    dispatch(emailUser(user.email));
    dispatch(numberUser(user.number));
  };

  // Log the current user object
  console.log("User Object:", userState);

  return (
    <div className="flex flex-col justify-center space-y-5 items-center">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        className="border"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        className="border"
      />
      <input
        type="number"
        name="number"
        placeholder="Number"
        value={user.number}
        onChange={handleChange}
        className="border"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default User;
