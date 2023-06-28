// Custom imports
import { API } from "../shared/API/apiroutes";
import { config } from "../shared/env";
import HttpRoutingService from "./httpRoutingService";
import * as Crypto from 'react-native-crypto-js'

class authService {
    loginCheck(credentials: {username : string , password : string}) {
        let hashedCredentials = {
            username : credentials.username,
            password : Crypto.AES.encrypt(credentials.password,config.secret_key).toString()
        }
        return HttpRoutingService.postMethod(API.SIGNIN_URL, hashedCredentials)
    }
}

const AuthService = new authService;
export default AuthService