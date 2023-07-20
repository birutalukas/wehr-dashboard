import axios, { AxiosResponse } from "axios";

const getRequest = async <T>(url: string): Promise<AxiosResponse<T>> => {
    console.log("getRequest()");
    const response = await axios.get<T>(url);
    console.log(response.data);
    return response;
};

export default getRequest;
