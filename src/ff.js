import template from 'item.hbs';
function api(method, params) {
    return new Promise((resolve, reject) => {
        VK.api(method, params, data => {
            if (data.error) {
                reject(new Error(data.error.error_msg));
            } else {
                resolve(data.response);
            }
        });
    });
}
const promise = new Promise((resolve, reject) => {
    VK.init({
        apiId: 6195616
    });
    VK.Auth.login(data => {
        if (data.session) {
            resolve(data);
        } else {
            reject(new Error('Не удалось авторизоваться'));
        }
    }, 16);
});
promise
    .then(() => {
        return api('users.get', { v: 5.68, name_case: 'gen' });
    })
    .then(data => {
        const [user] = data;
        headerInfo.innerText = `Друзья на странице ${user.first_name} ${user.last_name}`;
        return api('friends.get', { v: 5.68, fields: 'first_name, last_name, photo_100' })
    })
    .then(data => {
        console.log(data);
        const html = template('#user-template');
        const list = document.querySelector('#list');
        list.innerHTML = html;
    })