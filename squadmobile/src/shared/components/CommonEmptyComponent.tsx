import React, { FC } from "react";
import { View } from "react-native"
import Lottie from 'lottie-react-native';
import CommonText from "./CommonText";
import { appColors } from "../appColors";

const CommonEmptyComponent: FC<{}> = ({ }) => {

    // variable to handle loader file
    const noRecordsFound = require('../lottieFiles/noRecords.json')

    // variable to handle common loader width and height
    const emptyRecordsDimension = 100

    return <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Lottie source={noRecordsFound} style={{ height: emptyRecordsDimension, width: emptyRecordsDimension }} autoPlay />
        <CommonText content="No Records Found" fontSize={'medium'} color={appColors.dark} />
    </View>
}

export default CommonEmptyComponent