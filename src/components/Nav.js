import min_logo from "../images/logo.png"
import max_logo from "../images/big_logo.png"
const Nav = ({minimal, authToken}) => {

    //const minimal = true
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src = {minimal ? min_logo : max_logo}/>
            </div>

            {!authToken && !minimal && <button className="nav-button">Log in</button>}
        </nav>
    )
}

export default Nav