import animationActions from "../../context/animation/animationActions"
import {useContext, useState} from "react"
import {AnimationContext} from "../../context/animation/animationReducer"
import arrow from "../../icon/arrow_right.svg"
import sort from "../../icon/sort.svg"
import checked from "../../icon/check.svg"
import check from "../../icon/check (1).svg"

const sortTypes = {
    rate: "rate",
    newest: "newest",
    mostView: "view",
}

function AnimationsHeader()
{
    const [showModal, setShowModal] = useState(false)
    const {dispatch} = useContext(AnimationContext)
    const [checkList, setCheckList] = useState(sortTypes.mostView)

    function onSortClick({sort})
    {
        return function ()
        {
            window.scroll({top:0})
            animationActions.getList({sort, dispatch, fuckData: true})
            setCheckList(sort)
            toggleModal()
        }
    }

    function toggleModal()
    {
        setShowModal(showModal => !showModal)
    }

    return (
        <>
            <div className="come-back">
                <img className="come-back-img" src={arrow} alt={arrow}/>
                بازگشت
            </div>
            <div className="ani-header">
                <div className="ani-header-right">
                    <div className="ani-header-right-title">چیارو ببینه؟</div>
                    <div className="ani-header-right-desc">مناسب برای 3 تا 7 سال</div>
                </div>
                <div className="ani-header-left" onClick={toggleModal}>
                    <img className="ani-header-left-img" src={sort} alt={sort}/>
                    مرتب سازی
                </div>
            </div>

            {
                showModal &&
                <>
                    <div className="ani-modal-back" onClick={toggleModal}/>
                    <div className="ani-modal">
                        <div className="ani-modal-title">مرتب سازی بر اساس</div>
                        <div className="ani-modal-rate" onClick={onSortClick({sort: sortTypes.rate})}>
                            <img className="ani-modal-svg" src={checkList !== sortTypes.rate ? check : checked}
                                 alt="check"/>
                            بیشترین امتیاز
                        </div>
                        <div className="ani-modal-mostView" onClick={onSortClick({sort: sortTypes.mostView})}>
                            <img className="ani-modal-svg" src={checkList !== sortTypes.mostView ? check : checked}
                                 alt="check"/>
                            بیشترین بازدید
                        </div>
                        <div className="ani-modal-newest" onClick={onSortClick({sort: sortTypes.newest})}>
                            <img className="ani-modal-svg" src={checkList !== sortTypes.newest ? check : checked}
                                 alt="check"/>
                            جدیدترین
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default AnimationsHeader