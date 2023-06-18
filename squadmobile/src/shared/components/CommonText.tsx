import React, { FC, useEffect } from "react";
import { Text, StyleProp, TextStyle, StyleSheet } from 'react-native'
import { appFonts } from "../appFonts";



interface commonTextProp {
    style: StyleProp<TextStyle>,
    content: string,
    bold?: boolean,
    customFont?: string,
    fontSize?: String | 'small' | 'medium' | 'large' | 'header'
}

const commonTextStyle = StyleSheet.create({
    contentStyle: {
        fontSize: 17, color: 'white', fontFamily: appFonts.medium
    }
})

const smallFont = appFonts.smallSize | 12;
const mediumFont = appFonts.mediumSize | 15;
const largeFont = appFonts.largeSize | 16;
const headerFont = appFonts.headerSize | 18;

const CommonText: FC<commonTextProp> = ({ style, content, bold, customFont, fontSize }) => {

    return <Text style={[commonTextStyle.contentStyle, style,
    { ...bold && { fontFamily: appFonts.bold } },
    { ...customFont && { fontFamily: customFont } },
    { ...fontSize && { fontSize: fontSize === 'small' ? smallFont : fontSize === 'medium' ? mediumFont : fontSize === 'large' ? largeFont : headerFont } }
    ]}>
        {content}
    </Text>
}

export default CommonText