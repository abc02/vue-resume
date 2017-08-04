<template>
    <div>
        <h2>学习经历</h2>
        <el-form>
            <div class="container" v-for="(item,index) in school">
                <el-form-item label="学校">
                    <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input v-model="item.major"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" v-on:click="removeSchool(index)"></i>
            </div>
        </el-form>
        <div class="button-container">
            <button class="empty" v-on:click="emptySchool">清空</button>
            <button class="added" v-on:click="addSchool">
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
    props: ['school'],
    methods: {
        addSchool() {
            this.school.push({
                name: '', major: ''
            })
        },
        removeSchool(index) {
            this.school.splice(index, 1)
        },
        emptySchool() {
            this.school.map((obj) => {
                for (let key in obj) {
                    obj[key] = ''
                }
            })
        }
    }
}
</script>