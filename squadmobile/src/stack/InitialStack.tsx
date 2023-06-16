import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Custom imports
import Tasks from "../components/tasks";
import { TasksRoute, initialRouteName } from "./routeNames";
import CustomDrawer from "./CustomDrawer";

const InitialStack: FC<{}> = () => {

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer {...props} />}
                initialRouteName={initialRouteName}
            >
                <Drawer.Screen name={TasksRoute} component={Tasks} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default InitialStack