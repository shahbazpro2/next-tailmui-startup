/* eslint-disable react-hooks/exhaustive-deps */
import { FeedbackContext } from "@context/FeedbackContext"
import { useContext, useEffect, useState } from "react"

const useApi = ({ errMsg, successMsg, resErrMsg, resSuccessMsg } = { errMsg: true, resErrMsg: "", resSuccessMsg: "" }, apiFun, callback, errCallback) => {
	const context = useContext(FeedbackContext)
	const [state, setState] = useState({
		loading: false,
		error: null,
		data: null,
		message: null,
	})

	useEffect(() => {
		if (apiFun) {
			processing(apiFun, callback, errCallback)
		}
	}, [])

	const executeApi = async (fun, callback, errCallback) => {
		if (fun) {
			processing(fun, callback, errCallback)
		}
	}

	const processing = async (api, callback, errCallback) => {
		setState({ ...state, loading: true })
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
				})
				successMsg && context.setFeedback(resSuccessMsg || res.message, res.error)
			} else if (res.error) {
				setState({
					loading: false,
					error: res.error,
					message: resErrMsg || res.message,
					data: !res.error ? res.data : null,
				})

				errMsg && context.setFeedback(resErrMsg || res.message, res.error)
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
