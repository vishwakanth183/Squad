import React, { FC , useState} from 'react'
import { View } from 'react-native'
import { Button } from '@rneui/themed'
import Toast from 'react-native-toast-message'

// Custom imports
import { SIGIN_ERR } from './errorMessages'
import { appColors } from './appColors'
import CommonDialog from './components/CommonDialog'

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


    return <View>
        <Button title={'Show success toast'} onPress={() => { show('successToast') }} buttonStyle={{ marginBottom: 10 }} />
        <Button title={'Show failure toast'} onPress={() => { show('errorToast') }} buttonStyle={{ marginBottom: 10 }} />
        <Button title={'Show Dialog'} onPress={() => { show('dialog') }} buttonStyle={{ marginBottom: 10 }} />

        <CommonDialog
            visibility={logoutConfirmation}
            dialogTitle={logoutProps.title}
            description={logoutProps.description}
            actionButtons={logoutProps.actionButtons}
        />
    </View>
}

export default TestComponent