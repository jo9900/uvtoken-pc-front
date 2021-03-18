export const filName = (userName)=> {
    let str = '';
    if (userName){
        let strArr = userName.split('@');
        str = strArr[0].substring(0,3) + '***' + '@' + strArr[1];
    }
    return str;
}
