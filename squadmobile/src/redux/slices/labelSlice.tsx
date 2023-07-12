import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface labelTemplate {
    loading: boolean,
    data: any
}

const labelInititalState = {
    loading: false,
    data: []
}

const authSlice = createSlice({
    name: 'label',
    initialState: labelInititalState,
    reducers: {
        activateLoader: (state, action: PayloadAction<labelTemplate>) => {
            state.loading = true
        },
    },
})


export const { activateLoader } = authSlice.actions;

export default authSlice.reducer;