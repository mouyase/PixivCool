export default {
    firstRouter: '/',
    setUser(json) {
        localStorage.setItem('user_data', JSON.stringify(json))
        this.setRefreshTime()
    },
    getUser() {
        return JSON.parse(localStorage.getItem('user_data'))
    },
    setRefreshTime() {
        let date = new Date()
        date.setMinutes(date.getMinutes() + 30)
        console.log(date.getTime())
        localStorage.setItem('refresh_time', String(date.getTime()))
    },
    getRefreshTime() {
        return localStorage.getItem('refresh_time')
    },
    isLogin() {
        if (this.getUser()) {
            return true
        } else {
            return false
        }
    }
}