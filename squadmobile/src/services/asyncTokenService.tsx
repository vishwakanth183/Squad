import AsyncStorage from "@react-native-async-storage/async-storage"

// Based on the passed token value the function will fetch specific details from async-storage
export const getToken = async (tokenName: string) => {
    await AsyncStorage.getItem(tokenName).then((tokenRes) => {
        console.log(`${tokenName}`,tokenRes)
        return tokenRes
    }).catch((err) => {
        console.log(`${tokenName}`,err)
        return null
    })
}

// Based on the passed token value the function will fetch specific details from async-storage
export const setToken = async (tokenName: any , value : string) => {
    await AsyncStorage.setItem(tokenName , JSON.stringify(value))
}

// Based on the passed token value the function will remove specific details from async-storage
export const removeToken = async (tokenName: string) => {
    await AsyncStorage.removeItem(tokenName);
}


// This function will remove all token details from async-storage
export const clearAllToken = async () => {
    await AsyncStorage.clear();
}