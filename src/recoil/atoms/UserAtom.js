import {atom} from 'recoil'
import {localStorageEffect} from '../recoil-persist'

export const userState = atom({
    key: 'User',
    default: {},
    // effects: [
    //     localStorageEffect('User'),
    // ]
});

export const userListState = atom({
    key: 'UserList',
    default: [],
    // effects: [
    //     localStorageEffect('UserList'),
    // ]
});
