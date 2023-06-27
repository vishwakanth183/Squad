import React, { FC, useEffect } from "react";
import { StyleProp, TextStyle, StyleSheet } from "react-native";
import { Input, InputProps } from "@rneui/themed";

// Custom imports
import { appFonts } from "../appFonts";
import { appColors } from "../appColors";


interface commonInputProps extends InputProps {
    style?: StyleProp<TextStyle>,
    value: string,
    customFont?: string,
    fontSize?: String | 'small' | 'medium' | 'large' | 'header',
    color?: string,
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    errorFontSize? : String | 'small' | 'medium' | 'large' | 'header'
}

const smallFont = appFonts.smallSize | 12;
const mediumFont = appFonts.mediumSize | 15;
const largeFont = appFonts.largeSize | 16;
const headerFont = appFonts.headerSize | 18;

const commonTextInputStyle = StyleSheet.create({
    defaultContentStyle: {
        fontSize: 17, color: appColors.dark, fontFamily: appFonts.medium
    },
    defaultInputContainerStyle: { borderBottomColor: appColors.borderColor },
    defaultLabelStyle: { fontSize: largeFont, fontWeight: 'normal', fontFamily: appFonts.righteous, color: appColors.primary },
    defaultErrorStyle : {fontSize : smallFont , fontFamily : appFonts.medium }
})

const CommonInput: FC<commonInputProps> = ({placeholder , placeholderTextColor = appColors.grey, label, labelStyle, style, value, customFont, fontSize, color, rightIcon, rightIconContainerStyle, leftIcon, leftIconContainerStyle, inputContainerStyle, containerStyle, onChangeText, onBlur , secureTextEntry , errorMessage , errorStyle , errorFontSize}) => {
    return <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        label={label}
        labelStyle={[commonTextInputStyle.defaultLabelStyle , labelStyle]}
        style={[commonTextInputStyle.defaultContentStyle, style,
        { ...customFont && { fontFamily: customFont } },
        { ...fontSize && { fontSize: fontSize === 'small' ? smallFont : fontSize === 'medium' ? mediumFont : fontSize === 'large' ? largeFont : headerFont } },
        { ...color && { color: color } },
        ]}
        secureTextEntry={secureTextEntry}
        errorMessage={errorMessage}
        errorStyle={[commonTextInputStyle.defaultErrorStyle , errorStyle ,
        { ...errorFontSize && { fontSize: errorFontSize === 'small' ? smallFont : errorFontSize === 'medium' ? mediumFont : errorFontSize === 'large' ? largeFont : headerFont } },
        ]}
        rightIconContainerStyle={rightIconContainerStyle}
        leftIconContainerStyle={leftIconContainerStyle}
        inputContainerStyle={[commonTextInputStyle.defaultInputContainerStyle , inputContainerStyle]}
        value={value}
        containerStyle={containerStyle}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onChangeText={onChangeText}
        onBlur={onBlur}
    />
}

export default CommonInput
