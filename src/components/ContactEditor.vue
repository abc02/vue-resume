<template>
    <div>
        <h2>联系方式</h2>
        <el-form>
            <div class="container">
                <el-form-item label="手机">
                    <el-input v-model="contact.phone" placeholder="请填写手机号码"></el-input>
                </el-form-item>
                <el-form-item label="微信">
                    <el-input v-model="contact.wechat" placeholder="请填写微信号"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="contact.email" placeholder="请填写电子邮箱"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <div class="button-container">
            <button class="empty" v-on:click="emptyContact">清空</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['contact'],
    methods: {
        emptyContact() {
            for (let key in this.contact) {
                this.contact[key] = ''
            }
        }
    }
}
</script>
