import React, { FC, useState } from 'react'
import { View, Image, Dimensions, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import { Divider, Icon } from '@rneui/themed';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

// Custom imports
import { drawerMenu } from '../shared/drawerMenu';
import { drawerImage } from '../shared/imagePath';
import { appFonts } from '../shared/appFonts';
import CommonText from '../shared/components/CommonText';
import { appColors } from '../shared/appColors';
import { useAppDispatch } from '../redux/store';
import { logout } from '../redux/slices/authSlice';
import CommonDialog from '../shared/components/CommonDialog';

export interface menuButtonType {
    title: string;
    navigateTo: string;
    iconType: string;
    iconName: string;
    iconSize: number;
}

const CustomDrawer: FC<DrawerContentComponentProps> = ({ navigation }) => {

    const width = Dimensions.get('screen').width

    // Function to handle redux disptach
    const dispatch = useAppDispatch();

    // Variable to handle logout function
    const [logoutConfirmation , setLogoutConfirmation] = useState(false);

    // Variable to handle confirmation props
    const logoutProps = {
        title: "Logout Confirmation",
        description: "Are you sure you want to logout?",
        actionButtons: [
            {
                id: '1',
                buttonTitle: 'Yes',
                buttonBgColor: appColors.primary,
                buttonTitleColor: appColors.light,
                onPress: () => dispatch(logout())
            },
            {
                id: '2',
                buttonTitle: 'No',
                buttonBgColor: appColors.light,
                buttonTitleColor: appColors.primary,
                onPress: () => setLogoutConfirmation(false)
            }
        ]
    }


    // Handle drawer button press
    const handleDrawerButton = (item : menuButtonType) =>{
        if(item.title === "Logout")
        {
            setLogoutConfirmation(true);
            // dispatch(logout());
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: appColors.dark }}>

            <StatusBar backgroundColor={appColors.dark} />

            <Image
                resizeMode='stretch'
                source={drawerImage}
                style={{ height: '25%', width: '100%', marginBottom: 20 }}
            />

            {/* Rendering list of drawer menu items */}

            {
                drawerMenu.map((item, index) => {
                    return <TouchableOpacity key={index} style={{ marginVertical: 10 }} onPress={()=>handleDrawerButton(item)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, paddingLeft: 10 }}>
                            <Icon
                                type={item.iconType}
                                name={item.iconName}
                                size={item.iconSize}
                                color={appColors.primary}
                            />
                            <CommonText content={item.title} style={{ paddingLeft: 10 }} customFont={appFonts.righteous} fontSize={'header'} />
                        </View>
                        <Divider />
                    </TouchableOpacity>
                })
            }

            <CommonDialog visibility={logoutConfirmation} dialogTitle={logoutProps.title} description={logoutProps.description} actionButtons={logoutProps.actionButtons}/>

        </ScrollView>
    )
}

export default CustomDrawer