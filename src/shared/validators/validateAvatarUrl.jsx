export const  validationAvatarUrk = () =>{
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(Url);
}
 
export const avatarUrlValidationMessage = 'Esta no es una URL valida';