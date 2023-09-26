import { configureStore } from "@reduxjs/toolkit";
import {counter, counter2} from "./modules/counter"

export default configureStore({
  reducer: {
    counter:counter.reducer,
    counter2:counter2.reducer,
  }
});
