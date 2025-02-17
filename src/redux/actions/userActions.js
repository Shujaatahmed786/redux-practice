// Define action types
export const NAME_USER = "NAME_USER";
export const EMAIL_USER = "EMAIL_USER";
export const NUMBER_USER = "NUMBER_USER"; // Removed extra space

// Action creators with payloads
export const nameUser = (name) => {
  return {
    type: NAME_USER,
    payload: name, // Pass name as payload
  };
};

export const emailUser = (email) => {
  return {
    type: EMAIL_USER,
    payload: email, // Pass email as payload
  };
};

export const numberUser = (number) => {
  return {
    type: NUMBER_USER,
    payload: number, // Pass number as payload
  };
};
