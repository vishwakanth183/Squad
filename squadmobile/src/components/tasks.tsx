import React, { FC } from 'react'
import { View, Text } from 'react-native'
import TestComponent from '../shared/testComponent'

// Custom imports
import InitializeToast from '../shared/customizedToast/initializeToast'

const Tasks: FC<{}> = ({ }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tasks</Text>
            <InitializeToast />
            <TestComponent />
        </View>
    )
}

export default Tasks