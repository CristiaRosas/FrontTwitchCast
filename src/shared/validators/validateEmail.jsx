export const ValidateEmail = (email ) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}


export const emailValidationMessage = 'Por favor ingresar una dirección de correo valida';