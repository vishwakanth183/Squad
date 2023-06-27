import AsyncStorage from "@react-native-async-storage/async-storage"

// Based on the passed token value the function will fetch specific details from async-storage
export const getToken = async (tokenName: string) => {
    await AsyncStorage.getItem(tokenName).then((tokenRes) => {
        return tokenRes
    }).catch(() => {
        return null
    })
}

// Based on the passed token value the function will remove specific details from async-storage
export const removeToken = async (tokenName: string) => {
    await AsyncStorage.removeItem(tokenName);
}


// This function will remove all token details from async-storage
export const clearAllToken = async () => {
    await AsyncStorage.clear();
}