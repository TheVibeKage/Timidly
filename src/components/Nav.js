import min_logo from "../images/logo.png"
import max_logo from "../images/white_logo.png"

const Nav = ({minimal, authToken, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src = {minimal ? min_logo : max_logo} alt="missing logo"/>
            </div>

            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
            >Log in</button>}
        </nav>
    )
}

export default Nav