import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    add(state,{type, payload}){
      return state + payload;
    },
    minus(state,{type, payload}){
      return state - payload;
    },
  }
});

const counter2 = createSlice({
  name: "counter2",
  initialState: 0,
  reducers: {
    add2(state,{type, payload}){
      return state + payload * 2;
    },
    minus2(state,{type, payload}){
      return state - payload * 2;
    },
  }
});

const { add, minus } = counter.actions;
const { add2, minus2 } = counter2.actions;

export { add, minus };
export { add2, minus2 };
export {counter, counter2};
// export default counter.reducer;
