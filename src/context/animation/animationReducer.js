import {createContext, useReducer} from "react"
import {GET_ANIMATIONS} from "./animationTypes"

export const AnimationContext = createContext(null)

function AnimationReducer({children})
{
    const initialState = {
        page: null,
        data: [],
    }
    const init = () => initialState
    const [state, dispatch] = useReducer(reducer, initialState, init)

    function reducer(state, {type, payload})
    {
        if (type === GET_ANIMATIONS)
        {
            const {data, page, fuckData} = payload
            return {
                ...state,
                data: [...new Map([...(fuckData ? [] : state.data), ...data].map(item => [item.id, item])).values()],
                page,
            }
        }
    }

    return (
        <AnimationContext.Provider value={{state, dispatch}}>
            {children}
        </AnimationContext.Provider>
    )
}

export default AnimationReducer