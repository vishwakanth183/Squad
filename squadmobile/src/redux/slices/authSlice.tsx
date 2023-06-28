import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"

// Custom imports
import AuthService from "../../services/authService";
import { getToken, setToken } from "../../services/asyncTokenService";
import { AsyncTokens } from "../../shared/asyncTokens";


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
    authLoader: false,
    isLoggedIn: false,
    userInfo: {},
    isAdmin: false
}

type loginCredentials = {
    username: string,
    password: string
}

type ValidUser = {
    userDetails: any,
    token: string
}


// Async thunk to check whether the userinfo is valid
export const loginCheck = createAsyncThunk<ValidUser, loginCredentials>(
    'loginCheck',
    async (credentials) => {
        const userInfo = await AuthService.loginCheck(credentials)
        console.log("userInfo",userInfo);
        const validUser: ValidUser = userInfo;
        return validUser;
    })

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
        },
        checkToken : (state ) =>{
            const userToken = getToken(AsyncTokens.userToken);
            const userDetails = getToken(AsyncTokens.userDetails);
            console.log("userDetails", userDetails)
            if(userToken && userDetails)
            {
                // state.userInfo = userDetails;
                state.appLoading = false;
                // state.isAdmin = userDetails.role === "Admin" ? true : false;
                // state.isLoggedIn = true;
            }
            else
            {
                state.appLoading = false
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginCheck.pending, (state) => {
            state.authLoader = true;
            console.log('userInfo pending')
        });
        builder.addCase(loginCheck.fulfilled, (state, action: PayloadAction<ValidUser>) => {

            console.log("reponse from login check", action);

            state.authLoader = false;
            if (action.payload) {
                state.isLoggedIn = true;
                state.userInfo = action.payload.userDetails;
                if (action.payload.userDetails.role === "Admin") {
                    state.isAdmin = true;
                }
                // Setting the user token in async
                setToken(AsyncTokens.userToken, action.payload.token);
                setToken(AsyncTokens.userDetails, action.payload.userDetails);
            }

        });
        builder.addCase(loginCheck.rejected, (state, action) => {
            state.authLoader = false;
            console.log('userInfo error', action)

        });
    },
})

export const { activateAppLoader, closeAppLoader, setUserDetails, logout , checkToken} = authSlice.actions;

export default authSlice.reducer;