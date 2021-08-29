export const plus = (_num) => {
  return { type: "PLUS", payload: { num: _num } };
};

export const minus = (_num) => {
  return { type: "MINUS", payload: { num: _num } };
};

export const asyncMinus = (_num) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "MINUS", payload: { num: _num } });
    }, 1500);
  };
};
