<template>
    <el-dialog :visible.sync="formData.logInVisible" size="smail">
        <span slot="title">
            登录
        
           
        </span>
        <el-form label-position="right" label-width="60px" :model="formData">
            <el-form-item label="用户名">
                <el-input :value="formData.user" @change="changeUser($event)"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" :value="formData.pass" @change="changePass($event)" @keyup.enter.native="logInUp"></el-input>
            </el-form-item>
        </el-form>
         <span class="test" @click="test = false" v-show="test">测试账户:hqq密码:1</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="logInVisible">取 消</el-button>
            <el-button type="primary" @click="logInUp" >登录</el-button>
        </span>
    </el-dialog>
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import signService from 'js/service/signService.js'
import leancloudService from 'js/service/leancloudService.js'


export default {
    data() {
        return {
            test: true
        }
    },
    computed: {
        ...mapState(['formData'])
    },
    methods: {
        logInUp() {
            console.log('logInUp')
            signService.logInUp(this.formData).then(loginup => {
                console.log('logInUp', loginup)
                this.msg('登录成功，欢迎回来！')
                this.logInVisible()
                let currentUser = signService.getCurrentUser()
                this.$store.commit('setCurrentUser', currentUser)
                this.$store.dispatch('read', { currentUser }).then(res => {
                    this.$store.commit('setResume', res)
                })
            }, error => {
                console.log(error)
                this.msg('用户名或密码错误', 'warning')
            })
        },
        ...mapMutations(['changeUser', 'changePass', 'logInVisible'])
    }
}
</script>

<style>
.test{
    cursor: pointer;
}

</style>
