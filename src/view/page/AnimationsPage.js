import AnimationsHeader from "../container/AnimationsHeader"
import {useContext, useEffect, useState} from "react"
import {AnimationContext} from "../../context/animation/animationReducer"
import animationActions from "../../context/animation/animationActions"
import star from "../../icon/vuesax_linear_star.svg"

function AnimationsPage()
{
    const {state: {data, page}, dispatch} = useContext(AnimationContext)
    const [getLoading, setGetLoading] = useState(false)

    function getData()
    {
        setGetLoading(true)
        animationActions.getList({dispatch, page: page ? page + 1 : 1})
    }

    useEffect(() =>
    {
        getData()
    }, [])

    useEffect(() =>
    {
        if (page) setGetLoading(false)
    }, [page])

    useEffect(() =>
    {
        function onScroll()
        {
            if (!getLoading && window.scrollY + window.innerHeight >= document.body.scrollHeight)
            {
                getData()
            }
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [getLoading,page])

    return (
        <div>
            <AnimationsHeader/>
            <div className="animation-page">
                {
                    data.map(item =>
                        <div className="ani-page" key={item.id}>
                            <img className="ani-page-img" src={item.reviewsThumbnailUrl} alt="عکس"/>
                            <div className="ani-page-name">{item.reviewsTitle}</div>
                            <div className="ani-page-point">
                                <img className="ani-page-point-img" src={star} alt="star"/>
                                <div className="ani-page-point-number">{item.reviewsRate}</div>
                            </div>
                        </div>,
                    )
                }
            </div>
            {
                getLoading &&
                <div>wait...</div>
            }
        </div>
    )
}

export default AnimationsPage