import { NavigationContainer } from "@react-navigation/native";
import React, { FC, useEffect } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from "react-redux";


// Custom imports
import Tasks from "../components/tasks";
import { TasksRoute, initialRouteName } from "./routeNames";
import CustomDrawer from "./CustomDrawer";
import { RootState, useAppDispatch } from "../redux/store";
import CommonLoader from "../shared/components/CommonLoader";
import { closeAppLoader, userPatch } from "../redux/slices/authSlice";
import Signin from "../components/auth/sigin";
import { getToken } from "../services/asyncTokenService";
import { AsyncTokens } from "../shared/asyncTokens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InitializeToast from "../shared/customizedToast/initializeToast";



const InitialStack: FC<{}> = ({}) => {

    const Drawer = createDrawerNavigator();

    // Variable to handle auth slice values
    const auth = useSelector((state: RootState) => state.auth)

    // Variable to handle dispatch actions of reduc
    const disptach = useAppDispatch();

    // Function to check whether the user has logged in
    const loginCheck = async() =>{
        const userToken = await AsyncStorage.getItem(AsyncTokens.userToken);
        const userDetails = await AsyncStorage.getItem(AsyncTokens.userDetails);
        if(userToken && userDetails)
        {
            disptach(userPatch(JSON.parse(userDetails)))
        }
        else
        {
            disptach(closeAppLoader())
        }
    }

    useEffect(() => {
        loginCheck()
    }, [])

    if (auth?.appLoading) {
        return <CommonLoader isFullScreen />
    }

    return (
        <NavigationContainer>
            <InitializeToast />
            {
                auth?.isLoggedIn ?
                    <Drawer.Navigator
                        drawerContent={(props) => <CustomDrawer {...props} />}
                        initialRouteName={initialRouteName}
                    >
                        <Drawer.Screen name={TasksRoute} component={Tasks} />
                    </Drawer.Navigator>
                    :
                    <Signin />
            }
        </NavigationContainer>
    )
}

export default InitialStack