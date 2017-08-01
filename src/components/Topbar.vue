<template>
    <div id="topbar">
        <h2>Resume</h2>
        <div class="active">
            <el-button v-on:click="preview">预览</el-button>
            <el-button type="primary" v-on:click="saveData">保存</el-button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        preview() {
            this.$emit("preview")
        },
        saveData() {
            this.$emit('saveData')
        }

    }
}
</script>
<style lang="scss">
#topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
}
</style>