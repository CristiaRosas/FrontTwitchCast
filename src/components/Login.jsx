import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
    emailValidationMessage,
    validateEmail,
    validatePasswordMessage,
    validatePassword
} from "../shared/validators";
import { useLogin } from "../shared/hooks"

export const Login = ({ switchAuthHandler }) => {
    
    const { login, isLoading } = useLogin()

    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch(field) {
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;
            default:
                break;
        }
        setFormState((prevState) =>({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    }

    const handleLogin = (event) => {
        event.preventDefault()
        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.email.isValid || !formState.password.isValid;

    return (
        <div className="login-container">
            <Logo text={'Login Kinal Cast'}/>
            <form className="auth-form">
                <Input
                    field='email'
                    label='Email'
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Log in
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-swith-label">
                Don't have an account? Sign up
            </span>
        </div>
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