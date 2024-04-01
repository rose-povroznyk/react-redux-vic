import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, step: 1 },
  reducers: {
    decrement: (state, action) => {
      state.count = state.count - state.step;
    },
    increment(state, action) {
      state.count = state.count + state.step;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

console.log(counterSlice);

const { reducer, actions } = counterSlice;

export const { increment, decrement, setStep } = actions;
export default reducer;
