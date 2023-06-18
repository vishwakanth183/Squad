import React, { FC } from 'react'
import { View, Image, Dimensions, ScrollView, TouchableOpacity , StatusBar} from 'react-native'
import { Divider, Icon } from '@rneui/themed';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

// Custom imports
import { drawerMenu } from '../shared/drawerMenu';
import { drawerImage } from '../shared/imagePath';
import { appFonts } from '../shared/appFonts';
import CommonText from '../shared/components/CommonText';
import { appColors } from '../shared/appColors';


const CustomDrawer: FC<DrawerContentComponentProps> = ({ navigation }) => {

    const width = Dimensions.get('screen').width

    return (
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: appColors.dark }}>

            <StatusBar backgroundColor={appColors.dark}/>

            <Image
                resizeMode='stretch'
                source={drawerImage}
                style={{ height: '25%', width: '100%', marginBottom: 20 }}
            />

            {/* Rendering list of drawer menu items */}

            {
                drawerMenu.map((item, index) => {
                    return <TouchableOpacity key={index} style={{ marginVertical: 10 }}>
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

        </ScrollView>
    )
}

export default CustomDrawer