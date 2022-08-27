const { atom } = require("recoil");

export const userState = atom({
    key: 'userState',
    default: {}
});

export const usersState = atom({
    key: 'usersState',
    default: []
});
