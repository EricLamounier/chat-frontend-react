import './BarSide.css'
const BarSide = (props) => {
    return (
        <div className='side'>
            <div className='sideBarMenu'></div>
            <div className='sideBarContainer'>
                {props.children}
            </div>
        </div>
    )
}

export default BarSide