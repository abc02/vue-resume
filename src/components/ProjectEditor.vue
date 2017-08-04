<template>
    <div>
        <h2>前端项目</h2>
        <el-form>
            <div class="container" v-for="(item,index) in projects">
                <el-form-item label="项目名称">
                    <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="项目内容">
                    <el-input v-model="item.content"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" v-on:click="removeProject(index)"></i>
            </div>
        </el-form>
        <div class="button-container">
            <button class="empty" v-on:click="emptyProject">清空</button>
            <button class="added" v-on:click="addProject">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-save"></use>
                </svg>
                <span>新增</span>
            </button>
        </div>
    </div>
</template>


<script>
export default {
    props: ['projects'],
    methods: {
        addProject() {
            this.projects.push({
                name: '', content: ''
            })
        },
        removeProject(index) {
            this.projects.splice(index, 1)
        },
        emptyProject() {
            this.projects.map((obj) => {
                for (let key in obj) {
                    obj[key] = ''
                }
            })
        }
    }
}
</script>