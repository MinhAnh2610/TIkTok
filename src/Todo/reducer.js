import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constant";

export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, state.job],
        job: "",
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job, index) => index !== action.payload),
      };
    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
