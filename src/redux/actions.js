export const ACTION_TYPE = {
  NUMBER_PLUS: 'numberPlus',
  NUMBER_MINUS: 'numberMinus',
};

export const numberPlus = () => ({
  type: ACTION_TYPE.NUMBER_PLUS,
});

export const numberMinus = () => ({
  type: ACTION_TYPE.NUMBER_MINUS,
});