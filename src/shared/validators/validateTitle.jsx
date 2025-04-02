export const validateTitle = (title) =>
{
    return title.length >= 3  && title,length <= 30 ;

}

export const validateTitleMessage = 'El titulo debe de tener mas de 3 carractes y menos de 30'