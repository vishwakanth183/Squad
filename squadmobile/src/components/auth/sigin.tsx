import React, { FC, useState } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFormik } from "formik";
import * as Yup from 'yup'

// Custom imports
import { appColors } from "../../shared/appColors";
import CommonInput from "../../shared/components/CommonInput";
import { mediumIconSize } from "../../shared/iconSize";
import CommonButton from "../../shared/components/CommonButton";
import { signinBackground } from "../../shared/imagePath";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";

// Redux functions
import { useAppDispatch } from "../../redux/store";
import { loginCheck } from "../../redux/slices/authSlice";

const signinStyles = StyleSheet.create({
    mainView: { flex: 1, backgroundColor: appColors.light, paddingVertical: 20, alignItems: 'center', justifyContent: 'center' },
    buttonRow: { flexDirection: 'row', alignItems: 'center', marginTop: 20 }
})

// This component will render the signin page
const Signin: FC<{}> = ({ }) => {

    // Variable to handle password visibility state
    const [showpassword, setShowPassword] = useState<boolean>(false);

    // Variable which is used to hold validation schema for formik
    const signinValidationSchema = Yup.object().shape({
        username: Yup.string()
            .label('username')
            .required('Username is required'),
        password: Yup.string()
            .label('password')
            .required('Password is required'),
    })

    // Variable to handle redux dipatch pattern
    const dispatch = useAppDispatch();

    // Form value initialization using formik
    const signinFormik = useFormik({
        validationSchema : signinValidationSchema,
        initialValues: {
            username: 'Admin@mailinator.com',
            password: 'Admin@1234'
        },
        onSubmit: (values) => {
            dispatch(loginCheck(values));
        },
    })

    return <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ImageBackground source={signinBackground}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

            <StatusBar backgroundColor={appColors.dark} />

            {/* Username */}
            <CommonInput
                placeholder='Enter user name / mail'
                label="UserName"
                labelStyle={{ color: appColors.primary }}
                value={signinFormik.values.username}
                color={appColors.light}
                fontSize={'medium'}
                errorMessage={signinFormik.touched.username && signinFormik.errors.username ? signinFormik.errors.username : '' }
                leftIcon={<MaterialCommunityIcons name="account" size={mediumIconSize} color={appColors.light} />}
                onChangeText={signinFormik.handleChange('username')}
                onBlur={signinFormik.handleBlur('username')}
            />

            {/* Password */}
            <CommonInput
                placeholder='Enter password'
                label="Password"
                labelStyle={{ color: appColors.primary }}
                value={signinFormik.values.password}
                color={appColors.light}
                fontSize={'medium'}
                secureTextEntry={!showpassword}
                leftIcon={<MaterialCommunityIcons name="key" size={mediumIconSize} color={appColors.light} />}
                rightIcon={<TouchableOpacity onPress={() => { setShowPassword(!showpassword) }}>
                    <MaterialCommunityIcons name={showpassword ? "eye-off" : "eye"} size={mediumIconSize} color={appColors.light} />
                </TouchableOpacity>}
                errorMessage={signinFormik.touched.password && signinFormik.errors.password ? signinFormik.errors.password : '' }
                onChangeText={signinFormik.handleChange('password')}
                onBlur={signinFormik.handleBlur('password')}
            />

            <View style={[signinStyles.buttonRow]}>

                {/* Signin Button */}
                <CommonButton
                    title="Login"
                    // disabled={!signinFormik.isValid || !signinFormik.dirty}
                    fontSize="large"
                    backgroundColor={appColors.primary}
                    titleColor={appColors.dark}
                    buttonStyle={{ width: 80 }}
                    onPress={()=>{signinFormik.handleSubmit()}}
                />

                {/* Signin Button */}
                {/* <CommonButton
                    title="Signup"
                    fontSize="large"
                    backgroundColor={appColors.primary}
                    titleColor={appColors.dark}
                    buttonStyle={{ width: 80, marginLeft: 10 }}
                /> */}

            </View>
        </ImageBackground>
    </ScrollView>
}



export default Signin