export const decodeToken = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''));

    return JSON.parse(jsonPayload);
}

export const encryptStr = (str) => {
    const publicKey = 'SpTQ5FV2M4Gn2rEyaQ';
    return CryptoJS.AES.encrypt(str, publicKey).toString();
}