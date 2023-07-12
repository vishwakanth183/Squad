// Signin.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Assuming you use redux-mock-store for testing
import axios from 'jest-mock-axios'

// Custom imports
import Signin from '../src/components/auth/sigin';
import useAppDispatch from '../__mocks__/useAppDispatch';
import authReducer, { activateAppLoader, closeAppLoader, setUserDetails, userPatch, logout, loginCheck, authInititalState } from '../src/redux/slices/authSlice'
import AuthService from '../src/services/authService';
import HttpRoutingService from '../src/services/httpRoutingService';
// import AuthService from '../src/services/authService';

const mockStore = configureStore([thunk]);

let userInfo = {
  _id: '64997002a09672b825a5e655',
  name: 'Admin',
  email: 'Admin@mailinator.com',
  phno: 34343434343,
  role: 'Admin',
  createdAt: '2023-06-26T11:01:22.212Z',
  updatedAt: '2023-06-26T11:01:22.212Z',
  __v: 0
}

let userResponse = {
  userDetails: {
    _id: '64997002a09672b825a5e655',
    name: 'Admin',
    email: 'Admin@mailinator.com',
    phno: 34343434343,
    role: 'Admin',
    createdAt: '2023-06-26T11:01:22.212Z',
    updatedAt: '2023-06-26T11:01:22.212Z',
    __v: 0
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTk3MDAyYTA5NjcyYjgyNWE1ZTY1NSIsIm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiQWRtaW5AbWFpbGluYXRvci5jb20iLCJwaG5vIjozNDM0MzQzNDM0Mywicm9sZSI6IkFkbWluIiwiaWF0IjoxNjg4Mzc2OTk2LCJleHAiOjE2ODg0NjMzOTZ9.4JrPSgNfZYApAkiZ6Tg5CW1tRSKcCnaenTE_pXIkvjE'
}

let errorResponse = {
  message: "Test error"
}



describe('Signin', () => {

  const store = mockStore({
    auth: authInititalState
  });

  jest.spyOn(AuthService, 'loginCheck').mockImplementation(() => {
    return Promise.resolve(userResponse)
  })

  it('submits the form on valid input', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Provider store={store}>
        <Signin />
      </Provider>
    );

    const emailInput = getByPlaceholderText('Enter user name / mail');
    const passwordInput = getByPlaceholderText('Enter password');
    const signInButton = getByText('Login');
    const eyebutton = getByTestId("eye");
    fireEvent.changeText(emailInput, 'valid-email@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(signInButton);
    fireEvent.changeText(emailInput, '')
    fireEvent.changeText(passwordInput, '')
    fireEvent.press(eyebutton);
    fireEvent.press(eyebutton);

    // Expect appropriate signin logic to be called
  });

  it("should cover auth slices", () => {
    const authInititalState = {
      appLoading: true,
      authLoader: false,
      isLoggedIn: false,
      userInfo: {},
      isAdmin: false
    }
    authReducer(authInititalState, closeAppLoader());
    authReducer(authInititalState, activateAppLoader());
    authReducer(authInititalState, setUserDetails({
      userInfo: userInfo
    }));
    authReducer(authInititalState, logout());
    authReducer(authInititalState, userPatch(userInfo));
  })

  it("should cover logincheck fullfilled/pending state", () => {
    axios.mockResolvedValueOnce(userResponse);
    store.dispatch(loginCheck());
    const actions = store.getActions();
    authReducer(store.getState().auth, actions[0]);
    authReducer(store.getState().auth, actions[1]);
  })

  it("should cover logincheck failed state", () => {
    authReducer(store.getState().auth, {
      type: 'loginCheck/rejected',
      payload: errorResponse
    });
  })

});
