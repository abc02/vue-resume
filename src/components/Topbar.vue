<template>
    <div id="topbar">
        <h2>Resume</h2>
        <div class="active">
            <el-button type="primary" v-on:click="preview">预览</el-button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        preview() {
            this.$emit("preview")
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