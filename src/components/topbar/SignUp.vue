<template>
    <el-dialog :visible.sync="formData.signUpVisible" size="smail">
        <span slot="title">
            注册
        </span>
        <el-form label-position="right" label-width="60px" :model="formData">
            <el-form-item label="用户名">
                <el-input :value="formData.user" @change="changeUser($event)"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" :value="formData.pass" @change="changePass($event)" @keyup.enter.native="signUp"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="signUpVisible">取 消</el-button>
            <el-button type="primary" @click="signUp">注册</el-button>
        </span>
    </el-dialog>
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import signService from 'js/service/signService.js'


export default {
    name: 'signUp',
    computed: {
        ...mapState(['formData'])
    },
    methods: {
        signUp() {
            signService.signUp(this.formData).then(currentUser => {
                console.log('signUp', currentUser)
                this.msg('注册成功')
                this.signUpVisible()
                signService.logInUp(this.formData)
                this.$store.commit('setCurrentUser', signService.getCurrentUser())
            }, error => {
                console.log(error)
                this.msg('注册失败', 'warning')
            })
        },
        onEnter(){
            console.log('onEnter')
        },
        ...mapMutations(['changeUser', 'changePass', 'signUpVisible'])
    }
}
</script>