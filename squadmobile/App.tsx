import React, { FC } from "react";
import { Provider } from 'react-redux'
import store from "./src/redux/store";
import InitialStack from "./src/stack/InitialStack";
import Signin from "./src/components/auth/sigin";

const App: FC<{}> = () => {

  return (
    <Provider store={store}>
      {/* <InitialStack /> */}
      <Signin />
    </Provider>
  )
}

export default App