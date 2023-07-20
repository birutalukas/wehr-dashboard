import axios, { AxiosResponse } from "axios";

const getRequest = async <T>(url: string): Promise<AxiosResponse<T>> => {
    const response = await axios.get<T>(url);
    return response;
};

export default getRequest;
