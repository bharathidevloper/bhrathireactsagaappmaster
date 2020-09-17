
const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN': {
      const { token } = action.payload;
      return {
        userToken: token,
        isLoading: false,
      };
    }
    case 'LOGIN-SUCCESS': {
      const { token } = action.payload;
      console.log(token);
      return {
        isSignout: false,
        userToken: token == "" ? null : token,
      };
    }
    case 'SIGN_OUT': {
      return {
        isSignout: true,
        userToken: null,
      };
    }
    default:
      return state;
  }
};

export { reducer };
