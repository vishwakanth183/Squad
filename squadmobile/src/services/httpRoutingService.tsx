// Custom imports
import { config } from '../shared/env';
import axiosInstance from './interceptor';

class httpRoutingService {
    /** Get method Function which is used for get method */
    getMethod(url: string, queryParams?: any) {
        console.log("Inside get method", url, queryParams)
        return axiosInstance.get(
            config.apiUrl + url, { params: queryParams });
    }
    /** Post method Function which is used for post method */
    postMethod(url: string, data: any, queryParams?: any) {
        console.log("inside post data", url, data, queryParams);
        return axiosInstance.post(config.apiUrl + url, data, { params: queryParams })
    }
    // Function which is used to send the delete api request to the server
    deleteMethod(url: string) {
        console.log("inside delete data", url);
        return axiosInstance.delete(config.apiUrl + url)
    }
    putMethod(url: string, data: any) {
        console.log("inside put data", url, data);
        return axiosInstance.put(config.apiUrl + url, data);
    }

}
const HttpRoutingService = new httpRoutingService();
export default HttpRoutingService;