const init = 0;

export const count = (_state = init, action) => {
  switch (action.type) {
    case "PLUS":
      return _state + action.payload.num;
    case "MINUS":
      return _state - action.payload.num;
    default:
      return _state;
  }
};
