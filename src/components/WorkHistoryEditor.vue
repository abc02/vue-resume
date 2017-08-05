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
                <i class="el-icon-circle-cross" v-on:click="removeWorkHistory(index)" v-if="workHistory.length > 1"></i>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    props: ['workHistory'],
    methods: {
        removeWorkHistory(index) {
            this.workHistory.splice(index, 1)
        },
    }
}
</script>