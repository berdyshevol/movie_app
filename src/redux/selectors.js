import { createSelector } from 'reselect';



export const getNumber = state => {
  return state.number;
}

const getUsers = state => {
  return state.arr;
}

export const getUsersSelector = createSelector(getUsers, users => {
  return users;
});