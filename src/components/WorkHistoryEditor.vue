<template>
    <div>
        <h2>工作经历</h2>
        <el-form>
            <div class="container" v-for="(work,index) in workHistory">
                <el-form-item label="公司">
                    <el-input v-model="work.company" placeholder="请填写公司名称"></el-input>
                </el-form-item>
                <el-form-item label="工作内容">
                    <el-input v-model="work.content" placeholder="请填写岗位名称"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" v-on:click="removeWorkHistory(index)"></i>
            </div>
        </el-form>
        <div class="button-container">
            <button class="empty" v-on:click="emptyWorkHistory">清空</button>
            <button class="added" v-on:click="addWorkHistory">
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
    props: ['workHistory'],
    methods: {
        addWorkHistory() {
            this.workHistory.push({
                company: '', content: ''
            })
        },
        removeWorkHistory(index) {
            this.workHistory.splice(index, 1)
        },
        emptyWorkHistory() {
            this.workHistory.map((obj) => {
                for (let key in obj) {
                    obj[key] = ''
                }
            })
        }
    }
}
</script>