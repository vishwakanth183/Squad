// App.jsx
import { BaseToast, ErrorToast, BaseToastProps } from 'react-native-toast-message';

// Custom imports
import { appColors } from '../appColors';
import { appFonts } from '../appFonts';
import RenderToastTrialIcon from './renderToastTrailIcon';


// Default variables
const text1FontSize = 16;
const text2FontSize = 14;

export const toastConfig = {

    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props: BaseToastProps) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: appColors.green }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: text1FontSize,
                fontFamily: appFonts.righteous,
                fontWeight: 'normal'
            }}
            text2Style={{
                fontSize: text2FontSize,
                fontFamily: appFonts.righteous
            }}
            renderTrailingIcon={() => <RenderToastTrialIcon iconType='success' />}
        />
    ),

    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props: BaseToastProps) => (
        <ErrorToast
            {...props}
            style={{ borderLeftColor: appColors.red }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: text1FontSize,
                fontFamily: appFonts.righteous,
                fontWeight: 'normal'
            }}
            text2Style={{
                fontSize: text2FontSize,
                fontFamily: appFonts.righteous
            }}
            renderTrailingIcon={() => <RenderToastTrialIcon iconType='error' />}
        />
    ),
};
