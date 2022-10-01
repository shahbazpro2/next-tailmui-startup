/* eslint-disable react-hooks/exhaustive-deps */
import { FeedbackContext } from "@context/FeedbackContext"
import { useContext, useEffect, useState } from "react"

const useApi = (
	{ errMsg, successMsg, resErrMsg, resSuccessMsg } = { errMsg: true, resErrMsg: "", resSuccessMsg: "" },
	apiFun,
	callback,
	errCallback
) => {
	const context = useContext(FeedbackContext)
	const [state, setState] = useState({
		loading: false,
		error: null,
		data: null,
		message: null,
		resData: null,
	})

	useEffect(() => {
		if (apiFun) {
			processing(apiFun, callback, errCallback)
		}
	}, [])

	const executeApi = async (fun, callback, errCallback, config) => {
		if (fun) {
			processing(fun, callback, errCallback, config)
		}
	}

	const processing = async (api, callback, errCallback, config) => {
		setState({ ...state, loading: config?.loading ?? true })
		let res = null
		if (api instanceof Function) res = await api()
		else res = await api
		if (res) {
			if (!res.error) {
				setState({
					loading: false,
					error: res.error,
					message: resSuccessMsg || res.message,
					data: !res.error ? res.data : null,
					resData: res?.resData,
				});
				(successMsg && config?.successMsg !== false) && context.setFeedback(resSuccessMsg || res.message, 'success')
			} else if (res.error) {
				setState({
					loading: false,
					error: res.error,
					message: resErrMsg || res.message,
					data: !res.error ? res.data : null,
					resData: res?.resData,
				});

				(errMsg && config?.errMsg !== false) && context.setFeedback(resErrMsg || res.message, 'error')
			}
			if (!res.error) {
				if (callback) callback(res)
			}
			if (res.error) {
				if (errCallback) errCallback(res)
			}
		}
	}
	return [executeApi, { ...state }]
}

export default useApi
