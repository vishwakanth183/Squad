import React, { FC, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button } from '@rneui/themed'
import Toast from 'react-native-toast-message'
// import * as Crypto from 'react-native-crypto'
import * as Crypto from 'react-native-crypto-js'

// Custom imports
import { SIGIN_ERR } from './errorMessages'
import { appColors } from './appColors'
import CommonDialog from './components/CommonDialog'
import CommonLoader from './components/CommonLoader'
import CommonFooterLoader from './components/CommonFooterLoader'
import CommonEmptyComponent from './components/CommonEmptyComponent'

const TestComponent: FC<{}> = ({ }) => {

    // Variable to handle logout confirmation
    const [logoutConfirmation, setLogoutConfirmation] = useState(false)

    // Variable to handle confirmation props
    const logoutProps = {
        title: "Logout Confirmation",
        description: "Are you sure you want to logout?",
        actionButtons: [
            {
                id: '1',
                buttonTitle: 'Yes',
                buttonBgColor: appColors.primary,
                buttonTitleColor: appColors.light,
                onPress: () => setLogoutConfirmation(false)
            },
            {
                id: '2',
                buttonTitle: 'No',
                buttonBgColor: appColors.light,
                buttonTitleColor: appColors.primary,
                onPress: () => setLogoutConfirmation(false)
            }
        ]
    }

    const encryptanddecryptTest = () =>{
        let encrypt = Crypto.AES.encrypt('User@1234','squad').toString()
        console.log(encrypt)
        let decrypt = Crypto.AES.decrypt(encrypt,'squad')
        const result = decrypt.toString(Crypto.enc.Utf8).replace('|', /\\/g);
        console.log(result)
    }

    const show = (messageType: String) => {
        if (messageType === 'successToast') {
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Logged in successfully'
            })
        }
        else if (messageType === 'errorToast') {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: SIGIN_ERR
            })
        }
        else if (messageType === 'dialog') {
            setLogoutConfirmation(true)
        }
    }


    return <ScrollView contentContainerStyle={{flex:1 , justifyContent : 'center' , alignItems : 'center'}}>
        <Button title={'Show success toast'} onPress={() => { show('successToast') }} buttonStyle={{ marginBottom: 10 }} />
        <Button title={'Show failure toast'} onPress={() => { show('errorToast') }} buttonStyle={{ marginBottom: 10 }} />
        <Button title={'Show Dialog'} onPress={() => { show('dialog') }} buttonStyle={{ marginBottom: 10 }} />

        <CommonDialog
            visibility={logoutConfirmation}
            dialogTitle={logoutProps.title}
            description={logoutProps.description}
            actionButtons={logoutProps.actionButtons}
        />

        <CommonLoader />

        <CommonFooterLoader />

        <CommonEmptyComponent />

        <Button title={'Console Crypto text'} onPress={() => { encryptanddecryptTest() }} buttonStyle={{ marginBottom: 10 }} />

    </ScrollView>
}

export default TestComponent