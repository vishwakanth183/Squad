import React, { FC, useEffect } from 'react'
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity , StatusBar} from 'react-native'
import { Divider, Icon } from '@rneui/themed';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// Custom imports
import { drawerMenu } from '../shared/drawerMenu';
import { drawerImage } from '../shared/imagePath';
import { appFonts } from '../shared/appFonts';
import CommonText from '../shared/components/CommonText';


const CustomDrawer: FC<DrawerContentComponentProps> = ({ navigation }) => {

    const width = Dimensions.get('screen').width

    return (
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'black' }}>

            <StatusBar backgroundColor={'black'}/>

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
                                color={'violet'}
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