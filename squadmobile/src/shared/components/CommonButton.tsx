import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "@rneui/themed";
import { appColors } from "../appColors";
import { appFonts } from "../appFonts";

interface CustomButtonProps extends ButtonProps {
    title: string,
    customFont?: string,
    fontSize?: string | 'small' | 'medium' | 'large' | 'header',
    backgroundColor?: string,
    titleColor?: string
}

const smallFont = appFonts.smallSize | 12;
const mediumFont = appFonts.mediumSize | 15;
const largeFont = appFonts.largeSize | 16;
const headerFont = appFonts.headerSize | 18;

const customButtonStyles = StyleSheet.create({
    defaultTitleStyle: { fontSize: mediumFont , fontFamily : appFonts.righteous},
    defaultButtonStyle: { backgroundColor: appColors.primary , borderRadius : 7 }
})


const CommonButton: FC<CustomButtonProps> = ({ buttonStyle, title, fontSize, titleStyle, customFont, titleColor, backgroundColor , loading , disabled , onPress}) => {
    return <Button
        buttonStyle={[customButtonStyles.defaultButtonStyle, buttonStyle,
        { ...backgroundColor && { backgroundColor: backgroundColor } }
        ]}
        titleStyle={[customButtonStyles.defaultTitleStyle, titleStyle,
        { ...customFont && { fontFamily: customFont } },
        { ...fontSize && { fontSize: fontSize === 'small' ? smallFont : fontSize === 'medium' ? mediumFont : fontSize === 'large' ? largeFont : headerFont } },
        { ...titleColor && { color: titleColor } }
        ]}
        disabled={disabled}
        title={title}
        loading={loading}
        onPress={onPress}
    />
}

export default CommonButton