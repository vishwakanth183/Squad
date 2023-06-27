import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../../shared/API/apiroutes";

// auth template inteface
interface authTemplate {
    appLoading: boolean,
    isLoggedIn: boolean,
    userInfo: any,
    isAdmin: boolean
}

// initial state for auth slice
const authInititalState = {
    appLoading: true,
    authLoader : false,
    isLoggedIn: false,
    userInfo: {},
    isAdmin: false
}

// valid user response interface
interface validUser {
    userToken: string,
    userDetails: {
        username: string,
        email: string,
        phno: number,
        role: string
    }
}

// Async thunk to check whether the userinfo is valid
export const loginCheck = createAsyncThunk(
    'loginCheck',
    async () => {

    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: authInititalState,
    reducers: {
        activateAppLoader: (state) => { state.appLoading = true },
        closeAppLoader: (state) => { state.appLoading = false },
        setUserDetails: (state, action: PayloadAction<authTemplate>) => {
            state.isLoggedIn = true,
                state.isAdmin = action.payload.isAdmin,
                state.userInfo = action.payload.userInfo
        },
        logout: (state) => {
            state.isAdmin = false,
                state.isLoggedIn = false,
                state.userInfo = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginCheck.pending, (state) => {
          state.authLoader = true;
        });
        builder.addCase(loginCheck.fulfilled, (state, action) => {
          state.authLoader = false;
        });
        builder.addCase(loginCheck.rejected, (state, action) => {
          state.authLoader = false;
        });
      },
})

export const { activateAppLoader, closeAppLoader, setUserDetails, logout } = authSlice.actions;

export default authSlice.reducer;