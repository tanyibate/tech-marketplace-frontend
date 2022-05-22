const user = {
  firstName: "",
  lastName: "",
  address: "",
  profilePictureUrl:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case "SIGNIN":
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
