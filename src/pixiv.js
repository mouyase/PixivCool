import axios from "@/axios.modify";

export default {
    URL_APP_API: 'https://app-api.128512.xyz',
    URL_OAUTH: 'https://oauth.128512.xyz',
    refreshToken() {
        axios.post(this.pixiv.URL_OAUTH + '/auth/token', postData).then(response => {
            this.$loading().close()
            let userData = this._.get(response, 'data.response')
            if (userData) {
                this.app.setUser(userData)
                this.$router.replace(this.app.firstRouter).catch(err => err)
            }
        })
    }
}