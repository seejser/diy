
export function getRedirectPath() {
    // 根据用户客户端信息 返回跳转地址
    // client.type /wx /login
    // 
    //let url = (type === 'micromessenger') ? '/wx' : '/login'
    let url = '/outlook'
    return url
}
/**
 * 获取URL的参数
 * @param {参数名} n 
 * @param {URL} url 
 * @returns string
 */
export function getQueryString(n, url) {
    let m;
    let result;
    let search;

    if (url) {
        m = url.match(/\?[^#]+/);
        search = !m ? '' : m[0];
    } else {
        search = window.location.search;
    }

    m = search.match(new RegExp('(?:\\?|&)' + n + '=([^&]*)(&|$)'));


    try {
        result = !m ? '' : decodeURIComponent(m[1]);
    } catch (e) {
        result = '';
    }

    return String(result);
}
/**
 *
 *判断是否为微信内置浏览器
 * @export 
 * @returns boolen
 */
export function isWeixinBrowser() {
    return navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1 || typeof navigator.wxuserAgent !== 'undefined';
}