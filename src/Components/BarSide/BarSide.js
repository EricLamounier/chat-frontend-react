import './BarSide.css'
const BarSide = (props) => {
    return (
        <div className='side'>
            <div className='sideBarMenu card has-background-dark'></div>
            <div className='sideBarContainer card has-background-dark'>
                <p className='online'>Online</p>
                {props.children}
            </div>
        </div>
    )
}

export default BarSide