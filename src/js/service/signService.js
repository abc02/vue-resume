import AV from 'js/api/av.js';

class signService {
    static signUp(formData) {
        console.log('signService')
        let user = new AV.User()
        user.setUsername(formData.user)
        user.setPassword(formData.pass)
        return user.signUp()
    }
    static logInUp(formData) {
       return  AV.User.logIn(formData.user, formData.pass)
    }
    static logOut() {
        return AV.User.logOut()
    }
    static getCurrentUser() {
        let currentUser = AV.User.current()
        if(!currentUser){
            return null
        }
        let { id, createdAt, attributes: { username } }  = currentUser
        return { id, createdAt, attributes: { username } }
    }
}
export default signService