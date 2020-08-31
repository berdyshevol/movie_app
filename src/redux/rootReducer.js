import { ACTION_TYPE } from "./actions";

const initialState = {
  users: [
    { name: "Yuri", year: "1500", cite: "Moscow" },
    { name: "Kolya", year: "1500", cite: "Kyiv" },
    { name: "Vasya", year: "1500", cite: "Astrahan" },
  ],
  number: 1,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.NUMBER_PLUS:
      return {
        ...state,
        number: state.number + 1,
      };
    case ACTION_TYPE.NUMBER_MINUS:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}
