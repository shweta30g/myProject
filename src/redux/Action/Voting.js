//Action

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT
});

export const reset = () => ({
  type: RESET,
  
})
const initialState = {
  count: 0
};


//Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1};
    case DECREMENT:
      return { ...state, count: state.count - 1};
      case RESET:
        return { ...state, count: 0};
    default:
      return state;
  }
};