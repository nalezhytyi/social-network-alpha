import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "f684ac3c-5e2f-414f-8421-78edd01b8359"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getUserProfile(userId)
    }
};

export const authAPI = {
    isUserAuth() {
        return instance.get(`auth/me`)
},
     login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe} )
},
    logout() {
        return instance.delete(`auth/login`)
}
};

export const profileAPI = {
    getUserProfile(userId) {
    return instance.get(`profile/` + userId)
},
    getStatus(userId) {
    return instance.get(`profile/status/` + userId)
},
    updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
}
};



