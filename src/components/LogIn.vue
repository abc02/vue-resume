<template>
    <el-dialog :visible.sync="formData.logInVisible" size="smail">
        <span slot="title">
            登录
        </span>
        <el-form label-position="right" label-width="60px" :model="formData">
            <el-form-item label="用户名">
                <el-input v-model="formData.user"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="formData.pass"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="formData.logInVisible = false">取 消</el-button>
            <el-button type="primary" @click="logInUp">登录</el-button>
        </span>
    </el-dialog>
</template>


<script>
export default {
    props: ['formData'],
    methods: {
        logInUp() {
            this.$emit('logIn')
        }
    }
}
</script>