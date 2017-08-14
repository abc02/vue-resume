<template>
    <div id="topbar">
        <h2>Resume</h2>
        <div v-if="!currentUser">
            <el-button @click="formData.logInVisible = true">登 录</el-button>
            <el-button @click="formData.signUpVisible = true" type="text">注 册</el-button>
        </div>
        <LogIn :formData="formData" v-if="formData.logInVisible" v-on:logIn="logInUp" />
        <SignUp :formData="formData" v-if="formData.signUpVisible" v-on:signUp="signUp" />
        <CurrentUser :resume="resume" v-if="false"></CurrentUser>
        <div v-if="currentUser">
            <el-button>{{currentUser.username}}</el-button>
            <el-button @click="logOut">退出</el-button>
        </div>
    </div>
</template>
<script>
import LogIn from './LogIn';
import SignUp from './SignUp';
import AV from 'leancloud-storage';
var APP_ID = 'u4iB7Lu1Pe8XqJsITRwFFhV5-gzGzoHsz';
var APP_KEY = 'GPkePG17AlJGYunRvLYtpoEj';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
export default {
    components: {
        LogIn, SignUp
    },
    props: ['resume', 'currentUser'],
    data() {
        return {
            formData: {
                logInVisible: false,
                signUpVisible: false,
                user: '',
                pass: '',
            }
        };
    },
    methods: {
        signUp() {
            let user = new AV.User();
            user.setUsername(this.formData.user);
            user.setPassword(this.formData.pass);
            user.signUp().then((loginedUser) => {
                this.$message({
                    message: '注册成功！',
                    type: 'success'
                });
                this.formData.signUpVisible = false;
                this.logInUp()
            }, (error) => {
                this.$message({
                    message: '注册失败',
                    type: 'warning'
                });
            });
        },
        logInUp() {
            AV.User.logIn(this.formData.user, this.formData.pass).then((loginedUser) => {
                this.$message({
                    message: '登录成功，欢迎回来！',
                    type: 'success'
                });
                this.formData.logInVisible = false;
                this.$emit('logInUp', this.getCurrentUser())
            }, (error) => {
                this.$message({
                    message: '登录失败，用户或密码错误',
                    type: 'warning'
                });
            });
        },
        logOut() {
            AV.User.logOut();
            this.$message({
                message: '已登出',
                type: 'success'
            });
            this.$emit('logOut')
        },
        getCurrentUser() {
            let { id, createdAt, attributes: { username } } = AV.User.current()
            return { id, username, createdAt }
        },
        fecthResume() {

        }

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