<template>
    <div id="topbar">
        <h2>Resume</h2>
        <div class="login-group" v-if="!currentUser">
            <el-button @click="logInOrReg('login')">登 录</el-button>
            <el-button @click="logInOrReg('reg')" type="text">注 册</el-button>
            <el-dialog :visible.sync="formVisible" size="smail">
                <span slot="title">
                    {{isLogin? '登录' : '注册' }}
                </span>
                <el-form :label-position="labelPosition" label-width="60px" :model="formData">
                    <el-form-item label="用户名">
                        <el-input v-model="formData.user"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="formData.pass"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="formVisible = false">取 消</el-button>
                    <el-button type="primary" @click="logOrRegEvet(isLogin)">{{isLogin? '登 录' : '注 册' }}</el-button>
                </span>
            </el-dialog>
    
        </div>
        <div class="user-group" v-else>
            <el-button type="text">{{ currentUser.username }}</el-button>
            <el-button type="text" @click="logOut">注 销</el-button>
        </div>
    </div>
</template>
<script>
import AV from 'leancloud-storage'
var APP_ID = 'u4iB7Lu1Pe8XqJsITRwFFhV5-gzGzoHsz';
var APP_KEY = 'GPkePG17AlJGYunRvLYtpoEj';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
export default {
    data() {
        return {
            currentUser: null,
            formVisible: false,
            isLogin: null,
            labelPosition: 'right',
            formData: {
                user: '',
                pass: '',
            }
        };
    },
    methods: {
        logInOrReg(type) {
            this.formVisible = !this.formVisible
            if (type === "login") {
                this.isLogin = true
            }
            if (type == 'reg') {
                this.isLogin = false
            }
        },
        logOrRegEvet(type) {
            if (type) {
                this.loginUp()
            } else {
                this.regUp()
            }
        },
        regUp() {
            let user = new AV.User();
            user.setUsername(this.formData.user);
            user.setPassword(this.formData.pass);
            user.signUp().then((loginedUser) => {
                console.log('注册成功: ' + loginedUser)
                this.formVisible = false;
            }, (error) => {
                alert('已被注册', error)
            });
        },
        loginUp() {
            AV.User.logIn(this.formData.user, this.formData.pass).then((loginedUser) => {
                console.log('登录成功')
                this.currentUser = this.getCurrentUser()
                this.$emit('logined', this.currentUser)
            }, function (error) {
                alert('登录失败')
            });
        },
        logOut() {
            AV.User.logOut();
            this.formVisible = false;
            // 现在的 currentUser 是 null 了
            this.currentUser = AV.User.current();
            this.$emit('logined', this.currentUser)
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