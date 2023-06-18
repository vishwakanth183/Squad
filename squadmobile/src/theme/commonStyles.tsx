import {StyleSheet} from 'react-native'

// custom imports
import { appColors } from '../shared/appColors'
import { appFonts } from '../shared/appFonts'

export const commonStyles = StyleSheet.create({
    mobileText : {
        color : appColors.dark,
        fontFamily : appFonts.medium,
        fontSize : appFonts.mediumSize
    },
    titleText : {
        color : appColors.dark,
        fontFamily : appFonts.bold,
        fontSize : appFonts.largeSize
    },
    errorText : {
        color : appColors.dark,
        fontFamily : appFonts.medium,
        fontSize : appFonts.smallSize
    },
    headerText : {
        color : appColors.dark,
        fontFamily : appFonts.bold,
        fontSize : appFonts.headerSize
    }
})