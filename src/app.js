export default {
    firstRouter: '/',
    setUser(json) {
        localStorage.setItem('user_data', JSON.stringify(json))
    },
    getUser() {
        return JSON.parse(localStorage.getItem('user_data'))
    },
    isLogin() {
        if (this.getUser()) {
            return true
        } else {
            return false
        }
    }
}