import axios from "axios";
import ApiConfig from "./ApiConfig";
import queryString from 'query-string';

const AxiosClient = axios.create({
    baseURL: ApiConfig.baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify({ ...params, api_key: ApiConfig.apiKey }),
})

AxiosClient.interceptors.request.use(async (config) => config);

AxiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default AxiosClient;