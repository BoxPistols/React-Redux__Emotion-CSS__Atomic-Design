export const plus = (_num) => {
  return { type: "PLUS", payload: { num: _num } };
};

export const minus = (_num) => {
  return { type: "MINUS", payload: { num: _num } };
};

export const asyncMinus = (_num) => {
  setTimeout(() => {
    return { type: "MINUS", payload: { num: _num } };
  }, 1000);
};
