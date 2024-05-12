import { configureStore } from "@reduxjs/toolkit";
import CompilerSlice from "./slices/CompilerSlice";

export const store = configureStore({
    reducer:{
        CompilerSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;