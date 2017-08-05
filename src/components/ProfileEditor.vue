<template>
    <div>
        <h2> 个人信息</h2>
        <el-form>
            <div class="container">
                <el-form-item label="姓名">
                    <el-input v-model="profile.name" placeholder="请填写姓名"></el-input>
                </el-form-item>
                <el-form-item label="城市">
                    <el-input v-model="profile.citry" placeholder="请填写所在城市"></el-input>
                </el-form-item>
                <el-form-item label="出生年月">
                    <el-input v-model="profile.birth" placeholder="请填写出生年月日"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <!-- <div class="button-container">
                <button class="empty" v-on:click="emptyProfile">清空</button>
            </div> -->
    </div>
</template>


<script>
export default {
    props: ['profile'],
    methods: {
        emptyProfile() {
            for (let key in this.profile) {
                this.profile[key] = ''
            }
            this.$emit('saveData')
        }

    }
}
</script>

