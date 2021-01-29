export const TOKEN_KEY = "auth-key";

const _TOKEN = "PXKur4G5hybpOq4sw66IfmNAzw0AOtWo";

export const getToken = () => {
    localStorage.setItem(TOKEN_KEY, _TOKEN);
    return localStorage.getItem(TOKEN_KEY);
};
export const setRemoveToken = (event) => {
    if (event){
        localStorage.removeItem(TOKEN_KEY);
    }
};