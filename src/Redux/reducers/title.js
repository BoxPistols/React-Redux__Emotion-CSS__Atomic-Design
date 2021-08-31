export const title = (state = "The Counter", action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return action.payload.title;
    case "WAIT":
      return "WAIT";
    default:
      return state;
  }
};
