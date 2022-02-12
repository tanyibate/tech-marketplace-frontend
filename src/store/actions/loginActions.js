export const login = (user) => {
  return {
    type: "SIGNIN",
    user,
  };
};

export const logout = () => {
  return {
    type: "SIGNOUT",
  };
};
