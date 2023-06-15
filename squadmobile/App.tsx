import React, { FC } from "react";
import { View, Text } from "react-native"
import { Provider } from 'react-redux'
import store from "./src/redux/store";
import InitialStack from "./src/stack/InitialStack";

const App: FC<{}> = () => {

  return (
    <Provider store={store}>
      <InitialStack />
    </Provider>
  )
}

export default App