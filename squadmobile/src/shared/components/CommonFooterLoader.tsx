import React, { FC } from "react";
import { View } from "react-native"
import Lottie from 'lottie-react-native';

const CommonFooterLoader: FC<{}> = ({ }) => {

    // variable to handle loader file
    const commonLottieLoader = require('../lottieFiles/footerLoader.json')

    // variable to handle common loader width and height
    const footerLoaderDimension = 40

    return <View style={{alignItems : 'center' , justifyContent : 'center'}}>
        <Lottie source={commonLottieLoader} style={{height : footerLoaderDimension , width : footerLoaderDimension}} autoPlay/>
    </View>
}

export default CommonFooterLoader