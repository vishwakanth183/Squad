// Custom imports
import { API } from "../shared/API/apiroutes";
import HttpRoutingService from "./httpRoutingService";

class authService {
    loginCheck(url: string, data: any) {
        return HttpRoutingService.postMethod(API.SIGNIN_URL, data)
    }
}

const AuthService = new authService;
export default AuthService