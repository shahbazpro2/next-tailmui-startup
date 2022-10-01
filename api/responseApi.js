/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
import objectToArray from "@utils/objectToArray";
import axios from "axios"
const CancelToken = axios.CancelToken
export let cancelRequest

export const apiUrl = process.env.NEXT_PUBLIC_API_URI
// Axios
axios.defaults.baseURL = apiUrl

const responseApi = async (url, method, data, headerData = {}) => {
    if (!navigator.onLine)
        return {
            error: true,
            data: ["Oops! You're offline. Please check your network connection..."]
        }

    try {
        const res = await axios({
            method,
            url,
            data,
            headers: { ...headerData },
            cancelToken: new CancelToken(function executor(c) {
                cancelRequest = c;
            })
        })

        if (!res.data.hasOwnProperty('data'))
            return { error: false, status: res.status, data: res.data, message: [], fullRes: res.data }
        else if (res.data.hasOwnProperty('message'))
            return { error: false, status: res.status, data: res.data.data, message: objectToArray(res.data.message), fullRes: res.data }
        else
            return { error: false, status: res.status, data: res.data.data, message: objectToArray(res.data.data), fullRes: res.data }
    } catch (err) {
        let data
        if (err.response?.status === 500) {
            data = { status: err.response?.status, message: ['Something went wrong.'] }
        }
        else if (err.message === "Network Error") {
            data = { status: 408, message: ['Server is not responding.'] }
        } else if (err.response?.data.hasOwnProperty('message'))
            data = { status: err.response?.status, message: objectToArray(err.response?.data?.message) }
        else
            data = { status: err.response?.status, message: objectToArray(err.response?.data) }

        return { error: true, ...data, data: null, fullRes: err.response?.data }
    }

}

export default responseApi