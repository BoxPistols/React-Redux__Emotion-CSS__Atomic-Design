export const title = (state = "The Counter", action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return action.payload.title;
    default:
      return state;
  }
};
