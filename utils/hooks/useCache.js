import { atom, useAtom } from "jotai"
import { useEffect, useState } from "react"

export const apiAtomCache = atom(null)

export const useCache = () => {
    const [state, setState] = useState({})
    const [apiAtom, setApiAtom] = useAtom(apiAtomCache)

    useEffect(() => {
        if (state?.cache) {
            setApiAtom(prevAtom => ({
                ...prevAtom,
                [state?.cache]: state.stateVal
            }))
        }
    }, [state])


    return [apiAtom, setState, setApiAtom]

}