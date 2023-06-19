import React, { FC } from "react";
import { View } from "react-native"
import Lottie from 'lottie-react-native';

const CommonLoader: FC<{}> = ({ }) => {

    // variable to handle loader file
    const commonLottieLoader = require('../lottieFiles/appLoader.json')

    // variable to handle common loader width and height
    const loaderDimension = 80

    return <View style={{alignItems : 'center' , justifyContent : 'center'}}>
        <Lottie source={commonLottieLoader} style={{height : loaderDimension , width : loaderDimension}} autoPlay/>
    </View>
}

export default CommonLoader