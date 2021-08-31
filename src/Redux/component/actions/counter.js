import axios from "axios";

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

export const changeTitle = (title) => {
  return { type: "CHANGE_TITLE", payload: { title: title } };
};

export const getJson = () => {
  return (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data[0].name);
        dispatch(changeTitle(res.data[0].name));
      })
      .catch((err) => {
        console.log("oh! : " + err);
      });
  };
};
