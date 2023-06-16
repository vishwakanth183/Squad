import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { ListItem , Icon , Avatar} from '@rneui/themed';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { drawerMenu } from '../shared/drawerMenu';


const CustomDrawer: FC<DrawerContentComponentProps> = ({ navigation }) => {
    return (
        <DrawerContentScrollView>
            
        </DrawerContentScrollView>
    )
}

export default CustomDrawer