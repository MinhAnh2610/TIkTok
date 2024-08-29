import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constant";

export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
export const addJob = () => {
  return {
    type: ADD_JOB,
  };
};
export const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
