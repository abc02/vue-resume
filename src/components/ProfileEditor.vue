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
    </div>
</template>


<script>
export default {
    props: ['profile']
}
</script>

