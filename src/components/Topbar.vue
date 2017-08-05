<template>
    <div id="topbar">
        <h2>Resume</h2>
        <div class="active">
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