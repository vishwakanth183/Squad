import React, { FC } from 'react';
import { View } from 'react-native'
import { Dialog } from '@rneui/themed';

// Custom imports
import { appColors } from '../appColors';
import CommonText from './CommonText';
import { commonStyles } from '../../theme/commonStyles';


interface dialogInterface {
    visibility: boolean,
    dialogTitle: string,
    description: string,
    actionButtons: any
}

interface actionButton {
    id: string,
    buttonTitle: string,
    onPress: () => {},
    buttonBgColor: string,
    buttonTitleColor: string
}

const CommonDialog: FC<dialogInterface> = ({ visibility, dialogTitle, description, actionButtons }) => {
    return (
        <Dialog isVisible={visibility}>
            
            <Dialog.Title title={dialogTitle} titleStyle={[commonStyles.titleText, { fontWeight: 'normal', color: appColors.primary }]} />
            <CommonText content={description} style={{ color: appColors.grey }} />
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10 }}>

                {
                    actionButtons.map((actionItem: actionButton) => {
                        return <Dialog.Button
                            onPress={() => actionItem.onPress()}
                            key={actionItem.id}
                            title={actionItem.buttonTitle}
                            titleStyle={[commonStyles.mobileText, { color: actionItem.buttonTitleColor }]}
                            containerStyle={{ backgroundColor: actionItem.buttonBgColor, width: 60, borderRadius: 50, marginRight: 10, elevation: 5 }}
                        />
                    })
                }
            </View>
        </Dialog>
    );
}

export default CommonDialog;