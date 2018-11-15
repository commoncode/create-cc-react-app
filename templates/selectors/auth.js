export const isAuthenticated = state => state.auth.isAuthenticated;
export const getEmail = ({ auth: { email } }) => email || "";
export const getName = ({ auth: { first_name, last_name } }) =>
  [first_name, last_name].filter(val => val).join(" ") || "";
