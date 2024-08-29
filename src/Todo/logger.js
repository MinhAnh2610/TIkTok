function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    const newState = reducer(prevState, action);
    console.log("prev state", prevState);
    console.log("action", action);
    console.log("next state", newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;
