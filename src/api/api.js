import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "68870a34-22c9-4497-ac25-655c20034f56" }
})

/* 68870a34-22c9-4497-ac25-655c20034f56 */
/* b1775b2f-c3a5-4509-8dc9-90b5629de7c3 */

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    delete(id) {
        return instance.delete(`follow/` + id)
            .then(response => {
                return response.data
            })
    },
    post(id) {
        return instance.post(`follow/` + id)
            .then(response => {
                return response.data
            })
    }
}

export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data
            })
    },
}

export const ProfileAPI = {
    getProfile(id) {
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data
            })
    },
    getStatus(id) {
        return instance.get(`profile/status/` + id)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
            .then(response => {
                return response.data
            })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        .then(response => {
            return response.data})
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const AuthAPI = {
    authorize(email, password, rememberMe=false, captcha=null) {
        return instance.post(`auth/login/`, { email, password, rememberMe, captcha })
    },
    exit() {
        return instance.delete(`auth/login/`)
    }
}