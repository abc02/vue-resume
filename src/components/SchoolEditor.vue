<template>
    <div>
        <h2>学习经历</h2>
        <el-form>
            <div class="container" v-for="(item,index) in school">
                <el-form-item label="学校">
                    <el-input v-model="item.name" placeholder="请填写学校名称"></el-input>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input v-model="item.major" placeholder="请填写专业名称"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" v-on:click="removeSchool(index)" v-if="school.length > 1"></i>
            </div>
        </el-form>
    </div>
</template>


<script>
export default {
    props: ['school'],
    methods: {
        removeSchool(index) {
            this.school.splice(index, 1)
        },
    }
}
</script>