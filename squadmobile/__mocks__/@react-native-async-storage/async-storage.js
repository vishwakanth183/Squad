// __mocks__/@react-native-async-storage.js

let storage = {};

export const setItem = jest.fn((key, value) => {
  if(typeof(key)!='string')
  {
    return Promise.reject("Async key should be a string")
  }
  storage[key] = value;
});

export const getItem = jest.fn((key) => {
  if(typeof(key)!='string')
  {
    return Promise.reject("Async key should be a string")
  }
  else
  {
    return Promise.resolve(storage[key]);
  }
});

export const removeItem = jest.fn((key) => {
  delete storage[key];
});

export const clear = jest.fn(() => {
  storage = {};
});

const AsyncStorage = {
  setItem,
  getItem,
  removeItem,
  clear,
};

export default AsyncStorage;
