import React, { FC } from "react";
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

// Custom imports
import { appColors } from "../appColors";
import { toastTrailIconSize } from "../iconSize";


interface trailIconProps {
    iconType: string | 'success' | 'error'
}


const RenderToastTrialIcon: FC<trailIconProps> = ({ iconType }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
            {
                iconType === 'success' && <FontAwesome name='check-circle-o' size={toastTrailIconSize} color={appColors.green} />
            }
            {
                iconType === 'error' && <Entypo name='circle-with-cross' size={toastTrailIconSize} color={appColors.red} />
            }
        </View>
    )
}

export default RenderToastTrialIcon