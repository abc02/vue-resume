<template>
    <div id="topbar">
        <h2>Resume</h2>
        <div v-if="!currentUser">
            <el-button @click="logInVisible">登 录</el-button>
            <el-button @click="signUpVisible" type="text">注 册</el-button>
        </div>
        <LogIn v-if="formData.logInVisible" />
        <SignUp v-if="formData.signUpVisible" />
        <div v-if="currentUser">
            <el-button>{{currentUser.attributes.username}}</el-button>
            <el-button @click="logOut">退出</el-button>
        </div>
    </div>
</template>
<script>
import LogIn from './LogIn'
import SignUp from './SignUp'
import { mapState, mapMutations } from 'vuex'
import signService from 'js/service/signService.js'
// import store from 'store/index.js'

export default {
    name: 'TopBar',
    // store,
    components: {
        LogIn, SignUp
    },
    computed: {
        ...mapState(['currentUser', 'formData'])
    },
    methods: {
        logOut() {
            console.log('logout')
            signService.logOut()
            this.$store.commit('setCurrentUser', null)
            this.$store.commit('setResume', null)
        },
        ...mapMutations(['signUpVisible', 'logInVisible', 'setCurrentUser'])
    }

}
</script>
<style lang="scss">
#topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
}
</style>