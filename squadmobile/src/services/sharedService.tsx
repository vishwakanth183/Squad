import { Dimensions } from 'react-native';

// Function to get device width
export const getDeviceWidth = () => {
    return Dimensions.get('window').width;
};

// Function to get device height
export const getDeviceHeight = () => {
    return Dimensions.get('window').height;
};
