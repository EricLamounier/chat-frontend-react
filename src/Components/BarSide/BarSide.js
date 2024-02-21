import './BarSide.css'
const BarSide = (props) => {
    return (
        <div className='side'>
            <div className='sideBarMenu nes-container is-rounded'></div>
            <div className='sideBarContainer nes-container is-rounded'>
                {props.children}
            </div>
        </div>
    )
}

export default BarSide