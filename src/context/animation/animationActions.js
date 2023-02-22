import {GET_ANIMATIONS} from "./animationTypes"

function getList({dispatch, sort, page = 1, fuckData = false})
{
    let param = ""
    if (sort || page) param += "?"
    if (sort) param += `&sortby=${sort}`
    if (page) param += `&page=${page}`

    let url = "https://kodoumo.ir/wp-json/api/v2/reviews-category/animations" + param

    fetch(url)
        .then(res => res.json())
        .then(res =>
        {
            dispatch({
                type: GET_ANIMATIONS,
                payload: {data: res.data, page, fuckData},
            })
        })
        .catch(err => console.log(err))
}

const animationActions = {
    getList,
}

export default animationActions