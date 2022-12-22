/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setApiCache } from "redux/ApiCacheSlice"
import { uuid } from "uuidv4"


const useApi = (
	{ errMsg, successMsg, resErrMsg, resSuccessMsg, cache } = { errMsg: true, resErrMsg: "", resSuccessMsg: "" },
	apiFun,
	callback,
	errCallback
) => {
	const dispatch = useDispatch()
	const select = useSelector(state => state.apiCache[cache])
	const [state, setState] = useState({})
	const [key, setKey] = useState(uuid())



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
		let stateVal = {
			...state[cache || key], loading: config?.loading ?? true
		}
		if (cache) dispatch(setApiCache({
			key: cache,
			value: { ...select, stateVal }
		}))
		else
			setState(prevState => ({ ...prevState, [cache || key]: { ...stateVal, allState: stateVal } }))


		let res = null
		if (api instanceof Function) res = await api()
		else res = await api
		if (res) {

			if (!res.error) {
				stateVal = {
					loading: false,
					error: res.error,
					message: resSuccessMsg || res.message,
					data: !res.error ? res.data : null,
					resData: res?.resData
				}
				if (cache) {
					dispatch(setApiCache({
						key: cache,
						value: { ...stateVal, allState: stateVal }
					}))
				} else
					setState(prevState => ({ ...prevState, [key]: { ...stateVal, allState: stateVal } }));

				(successMsg && config?.successMsg !== false) && setFeedback({ message: resSuccessMsg || res.message, type: 'success' })
			} else if (res.error) {
				stateVal = {
					loading: false,
					error: res.error,
					message: resErrMsg || res.message,
					data: !res.error ? res.data : null,
					resData: res?.resData,
					allState: stateVal
				}
				if (cache) {
					dispatch(setApiCache({
						key: cache,
						value: { ...stateVal, allState: stateVal }
					}))
				} else {
					setState(prevState => ({
						...prevState,
						[key]: {
							...stateVal,
							allState: stateVal
						}
					}));
				}

				(errMsg && config?.errMsg !== false) && setFeedback({ message: resErrMsg || res.message, type: 'error' })
			}
			if (!res.error) {
				if (callback) callback(res)
			}
			if (res.error) {
				if (errCallback) errCallback(res)
			}
		}
	}
	if (cache)
		return [executeApi, { ...select }]

	return [executeApi, { ...state[key] }]

}

export default useApi
