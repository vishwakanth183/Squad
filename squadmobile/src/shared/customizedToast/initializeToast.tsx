import React from "react";
import Toast from 'react-native-toast-message';

// Custom imports
import { toastConfig } from "./toastConfig";


// Function which will be used commonly in every pages to initialize toast config
const InitializeToast = () => {
    return <Toast config={toastConfig} position='bottom' bottomOffset={120} />
}

export default InitializeToast