import { StorageHelper } from './storage';

export namespace Utils {
    /**
     * Utility interface for Storage Helper Class
     */

    export function isAuthenticated(): boolean {
        return StorageHelper.userInfo && StorageHelper.userInfo.accessToken && StorageHelper.userInfo.accessToken.length > 0;
    }

    export function getUserInfo() {
        return StorageHelper.userInfo
    }
}
