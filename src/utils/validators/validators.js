export const required = value => {
    if (value) return undefined;
    return ' заполните поле';
}

export const maxLength30 = value => {
    if (value && value.length > 30 ) return ' макс. кол-во символов - 30шт.';
    return undefined;
}