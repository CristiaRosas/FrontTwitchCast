import { useNavigate} from "react-router-dom";
import logo from '../../assets/img/kinalpeque.png';
import { useUserDetails } from "../../shared/hooks/useUserDetails";

const NavLogo = () => {
    return(
        <div className="nav-logo-container">
            <img
                className="nav-logo"
                width='100%'
                height='100%'
                src={logo}
                alt="kinalpeque"
            />
        </div>
    )
}

const NavButton = ({text, onClickHandler}) => {
    return(
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () =>{
    const { isLogged,logout } =useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAtuhPage = () =>{
        navigate('/auth')
    }

    const handleNavigateToSeetingPage = () =>{
        navigate('/settings')
    }

    const handleNavigateToChannelsPage = () =>{
        navigate('/channels')
    }

    const handleLogout = () =>{
        logout()
    }

    return (
        <div className="nav-container">
            <NavLogo />
            <div className="nav-buttons-container">
                <NavButton text='Browse' onClickHandler={handleNavigateToChannelsPage}/>
                {!isLogged ? (
                    <NavButton text='Login' onClickHandler={handleNavigateToAtuhPage}/>
                ) : (
                    <div>
                        <NavButton text='My account' onClickHandler={handleNavigateToSeetingPage}/>
                        <NavButton text='logout' onClickHandler={handleLogout}/>
                    </div>
                )}
            </div>
        </div>
    )
}