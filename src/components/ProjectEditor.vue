<template>
    <div>
        <h2>前端项目</h2>
        <el-form>
            <div class="container" v-for="(item,index) in projects">
                <el-form-item label="项目名称">
                    <el-input v-model="item.name" placeholder="请填写项目名称"></el-input>
                </el-form-item>
                <el-form-item label="项目内容">
                    <el-input v-model="item.content" placeholder="请填写项目内容"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" v-on:click="removeProject(index)" v-if="projects.length > 1"></i>
            </div>
        </el-form>
    </div>
</template>
<script>
export default {
    props: ['projects'],
    methods: {
        removeProject(index) {
            this.projects.splice(index, 1)
        }
    }
}
</script>