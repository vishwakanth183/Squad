import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: 0,
    reducers: {
        increment: (state, action: PayloadAction<number>) => state + action.payload,
    },
})


export const { increment } = authSlice.actions;

export default authSlice.reducer;