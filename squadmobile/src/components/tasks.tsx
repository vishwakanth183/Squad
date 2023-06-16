import React, { FC } from 'react'
import { View, Text } from 'react-native'

const Tasks: FC<{}> = ({ }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tasks</Text>
        </View>
    )
}

export default Tasks