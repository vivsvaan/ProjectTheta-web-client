import { LOCAL_STORAGE_KEYS } from './constants';
import { UserInfo } from '../app.interfaces';

class StorageHelperClass {
    constructor() {}

    private get(key: string) {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
    }

    private set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    clear() {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.UserInfo);
    }

    get userInfo(): UserInfo { return this.get(LOCAL_STORAGE_KEYS.UserInfo); }
    set userInfo(userInfo: UserInfo) { this.set(LOCAL_STORAGE_KEYS.UserInfo, userInfo); }

    /**
     * Please define seperate getters and setters here
     */
}

export const StorageHelper = new StorageHelperClass();